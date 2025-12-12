---
sidebar_position: 5
---

# Requests

## I. Multi-environment Configuration

### 1. Environment Files
Development projects often use multiple request environment addresses, such as the backend address for user development, backend address for testing, backend address for pre-production, and production address.

Configure multiple request addresses in the environment file, and then verify which request address to use based on the environment variable in the request function.

Current project environment files:
- `.env.prod`
- `.env.test`

### 2. Request Configuration

#### Configuration in `.env`
- `VITE_SERVICE_SUCCESS_CODE`: Backend request success code.
- `VITE_SERVICE_LOGOUT_CODES`: Code for backend request failure requiring user logout (comma separated).
- `VITE_SERVICE_MODAL_LOGOUT_CODES`: Code for backend request failure requiring user logout via modal (comma separated).
- `VITE_SERVICE_EXPIRED_TOKEN_CODES`: Code for backend request failure requiring token refresh (comma separated).

#### Configuration in `.env.test` or `.env.prod`
- `VITE_SERVICE_BASE_URL`: Base URL for requests.
- `VITE_OTHER_SERVICE_BASE_URL`: Base URL for other requests.

## II. Request Function Introduction

### 1. Request Function Types
- `createRequest`: The returned request instance returns Axios response data directly (transformable).
- `createFlatRequest`: The returned request instance wraps response data and error info in a flat object, returning results in a unified format.

### 2. Function Parameters

#### createRequest/createFlatRequest Parameters
- `axiosConfig`: Axios configuration, passing baseUrl, and defining other configs like timeout, headers, etc.
- `options`: Logic for validating inputs (see RequestOption below).

```typescript
interface RequestOption<ResponseData = any> {
  /** Executed before request sent, used to modify config, e.g., adding token header */
  onRequest: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
  
  /** Determine if backend response is success by checking returned code */
  isBackendSuccess: (response: AxiosResponse<ResponseData>) => boolean;
  
  /** Async function called when backend request indicates failure, e.g., handling expired token */
  onBackendFail: (
    response: AxiosResponse<ResponseData>,
    instance: AxiosInstance
  ) => Promise<AxiosResponse> | Promise<void>;
  
  /** Transform backend response data when responseType is json */
  transformBackendResponse(response: AxiosResponse<ResponseData>): any | Promise<any>;
  
  /** Function called when request fails (including request failure and backend business failure), e.g., error handling */
  onError: (error: AxiosError<ResponseData>) => void | Promise<void>;
}
```

## III. Usage Instructions

### 1. Get Base Path
```typescript
const isHttpProxy = import.meta.env.DEV && import.meta.env.VITE_HTTP_PROXY === 'Y';
const { baseURL, otherBaseURL } = getServiceBaseURL(import.meta.env, isHttpProxy);
```

`isHttpProxy` check if proxy is used. `baseURL` is the `VITE_SERVICE_BASE_URL` value. `otherBaseURL` is for `VITE_OTHER_SERVICE_BASE_URL`.

### 2. Create Request Instance
```typescript
import { createFlatRequest, createRequest } from '@sa/axios';

interface InstanceState {
  /** Whether a token refresh is in progress */
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
    // ... other configs
  }
);
```

### 3. Use Request Instance
```typescript
/** Login */
export function fetchLogin(loginRes: Api.Auth.LoginReq) {
  return request<Api.Auth.LoginToken>({
    url: '/auth/accounts/login',
    method: 'post',
    data: loginRes
  });
}

// Using createFlatRequest instance
async function login() {
  const { error, data } = await fetchLogin({ username: 'admin', password: 'admin' });
  if (!error) {
    // Success
  }
}

// Using createRequest instance
async function login() {
  const data = await fetchLogin({ username: 'admin', password: 'admin' });
  if (data) {
    // Success
  }
}
```

## IV. Proxy Configuration

### 1. Overview
The project uses `createServiceConfig` to create service base paths and proxy matching strings.

**Code Location**: `@/utils/service.ts`

Then `createViteProxy` uses this config to create proxies.

### 2. Enable/Disable
Enable or disable proxy via `VITE_HTTP_PROXY` in env file.

**Code Location**: `~.env`

### 3. Usage
In `@/service/request/index.ts`, pass `isHttpProxy` (determined by environment and `VITE_HTTP_PROXY`) as the second argument to `getServiceBaseURL` to decide if the URL needs proxy handling.

```typescript
const isHttpProxy = import.meta.env.DEV && import.meta.env.VITE_HTTP_PROXY === 'Y';
const { baseURL } = getServiceBaseURL(import.meta.env, isHttpProxy);
const { otherBaseURL } = getServiceBaseURL(import.meta.env, false);
```

### 4. Principle
SoybeanAdmin simplifies proxy config by setting the matching string to `/proxy-default/` (others `proxy-{key}`). When configuring proxy, simply replace `/proxy-default/` in the request address with the actual address.

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

### 5. Precautions
Two easily confused configurations:

1. Request path: `https://example.com/api/user`. Proxy config:
```typescript
{
  '/api': {
    target: 'https://example.com',
    changeOrigin: true,
  }
}
```
Here `/api` matches and is part of the path, so no rewrite needed.

2. Request path: `https://example.com/user`. Proxy config match string `/api`:
```typescript
{
  '/api': {
    target: 'https://example.com',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, ''),
  }
}
```
Here `/api` is the match string, but `user` is the path. Rewrite is needed to remove the match string.

SoybeanAdmin uses the second method with rewrite to support multiple service proxies and avoid conflicts with paths like `/api`.
