---
sidebar_position: 5
---

# 请求

## 一、多环境配置

### 1. 环境文件
开发项目经常会用到多个请求环境地址：如用户开发环境的后台地址、用于测试环境的后台地址、用于预生产环境的后台地址和用于生产环境的地址等。

在环境文件中配置多个请求地址，然后在请求函数中根据环境变量来判断使用哪个请求地址。

目前项目的环境文件有：
- `.env.prod`
- `.env.test`

### 2. 请求相关配置

#### .env 文件中的配置项
- `VITE_SERVICE_SUCCESS_CODE`: 后端请求成功的 code
- `VITE_SERVICE_LOGOUT_CODES`: 后端请求失败并需要用户退出登录的 code，多个 code 用 , 分隔
- `VITE_SERVICE_MODAL_LOGOUT_CODES`: 后端请求失败并需要用户退出登录的 code（通过弹窗形式提醒），多个 code 用 , 分隔
- `VITE_SERVICE_EXPIRED_TOKEN_CODES`: 后端请求失败并刷新 token 的 code，多个 code 用 , 分隔

#### .env.test 或 .env.prod 文件中的配置项
- `VITE_SERVICE_BASE_URL`: 请求的基础地址
- `VITE_OTHER_SERVICE_BASE_URL`: 其他请求的基础地址

## 二、请求函数介绍

### 1. 请求函数类型
- `createRequest`: 返回的请求实例直接返回 Axios 响应数据（可转换)
- `createFlatRequest`: 返回的请求实例会将响应数据和错误信息包装在一个扁平的对象中，以统一的格式返回结果。

### 2. 函数参数说明

#### createRequest/createFlatRequest 参数
- `axiosConfig`: axios 配置，传入 baseUrl，定义一些其他配置：如：请求的超时时间、请求头等
- `options`: 配置入参校验等逻辑(见下方的 RequestOption)

```typescript
interface RequestOption<ResponseData = any> {
  /** 请求发送之前执行，用来修改请求配置，例如：添加请求头 token */
  onRequest: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
  
  /** 判断后端响应是否成功，通过对比后端返回的 code 来判断 */
  isBackendSuccess: (response: AxiosResponse<ResponseData>) => boolean;
  
  /** 后端请求在业务上表示失败时调用的异步函数，例如：处理 token 过期 */
  onBackendFail: (
    response: AxiosResponse<ResponseData>,
    instance: AxiosInstance
  ) => Promise<AxiosResponse> | Promise<void>;
  
  /** 当 responseType 为 json 时，转换后端响应的数据 */
  transformBackendResponse(response: AxiosResponse<ResponseData>): any | Promise<any>;
  
  /** 当请求失败时调用的函数(包括请求失败和后端业务上的失败请求)，例如：处理错误信息 */
  onError: (error: AxiosError<ResponseData>) => void | Promise<void>;
}
```

## 三、使用说明

### 1. 获取请求的基础路径
```typescript
const isHttpProxy = import.meta.env.DEV && import.meta.env.VITE_HTTP_PROXY === 'Y';
const { baseURL, otherBaseURL } = getServiceBaseURL(import.meta.env, isHttpProxy);
```

`isHttpProxy` 用于判断是否使用代理，`baseURL` 表示环境文件中 `VITE_SERVICE_BASE_URL` 的值，`otherBaseURL` 用于其他请求，通过 `VITE_OTHER_SERVICE_BASE_URL` 配置。

### 2. 创建请求实例
```typescript
import { createFlatRequest, createRequest } from '@sa/axios';

interface InstanceState {
  /** 是否有请求正在执行刷新token */
  isRefreshingToken: boolean;
}

export const request = createFlatRequest<App.Service.Response, InstanceState>(
  {
    baseURL,
    headers: {
      apifoxToken: 'XL299LiMEDZ0H5h3A29PxwQXdMJqWyY2'
    }
  },
  {
    async onRequest(config) {
      const { headers } = config;
      const token = localStg.get('token');
      const Authorization = token ? `Bearer ${token}` : null;
      Object.assign(headers, { Authorization });
      return config;
    },
    // ... 其他配置
  }
);
```

### 3. 使用请求实例
```typescript
/** 登录 */
export function fetchLogin(loginRes: Api.Auth.LoginReq) {
  return request<Api.Auth.LoginToken>({
    url: '/auth/accounts/login',
    method: 'post',
    data: loginRes
  });
}

// 使用 createFlatRequest 创建的请求实例
async function login() {
  const { error, data } = await fetchLogin({ username: 'admin', password: 'admin' });
  if (!error) {
    // 请求成功
  }
}

// 使用 createRequest 创建的请求实例
async function login() {
  const data = await fetchLogin({ username: 'admin', password: 'admin' });
  if (data) {
    // 请求成功
  }
}
```

## 四、代理配置

### 1. 概述
项目中通过函数 `createServiceConfig` 创建服务的基础路径和匹配代理的字符串。

**代码位置**：`@/utils/service.ts`

然后在函数 `createViteProxy` 中根据上述获取的配置创建代理。

### 2. 开启/关闭
通过 env 文件的 `VITE_HTTP_PROXY` 开启或关闭代理。

**代码位置**：`~.env`

### 3. 使用方式
在 `@/service/request/index.ts` 里，通过给 `getServiceBaseURL` 的第二个参数传入根据代码运行环境与 `VITE_HTTP_PROXY` 共同判断出的 `isHttpProxy` 来决定该URL是否需要处理代理。

```typescript
const isHttpProxy = import.meta.env.DEV && import.meta.env.VITE_HTTP_PROXY === 'Y';
const { baseURL } = getServiceBaseURL(import.meta.env, isHttpProxy);
const { otherBaseURL } = getServiceBaseURL(import.meta.env, false);
```

### 4. 原理
SoybeanAdmin 为了简化配置代理的过程，特意将匹配字符串设定为 `/proxy-default/` (其他请求 `proxy-{key}`)，这样在配置代理时，只需要将请求的地址中的 `/proxy-default/` 替换为实际的请求地址即可。

```typescript
{
  '/proxy-default': {
    target: 'https://default.com',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/proxy-default/, ''),
  },
  '/proxy-demo': {
    target: 'https://demo.com',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/proxy-demo/, ''),
  }
}
```

### 5. 注意事项
这里介绍两种容易混淆的配置：

1. 假设一个请求的路径为 `https://example.com/api/user`，大多数会这样配置代理：
```typescript
{
  '/api': {
    target: 'https://example.com',
    changeOrigin: true,
  }
}
```
这时候 `/api` 既是作为匹配字符串，也是作为请求的路径。所以这里没有 rewrite 的配置，因为请求的路径和匹配字符串是一样的。

2. 假设一个请求的路径为 `https://example.com/user`，但是配置代理时，匹配字符串为 `/api`：
```typescript
{
  '/api': {
    target: 'https://example.com',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, ''),
  }
}
```
这时候 `/api` 是作为匹配字符串，`user` 是作为请求的路径。所以这里需要配置 rewrite，将匹配字符串去掉。

在 SoybeanAdmin 中，使用的是第二种包含 rewrite 配置，因为为了支持多个服务的代理，同时避免多个服务包含相同的 `/api` 路径，所以 SoybeanAdmin 选择创建了类似 `/proxy-*` 作为匹配字符串和请求的路径分开，避免冲突。
