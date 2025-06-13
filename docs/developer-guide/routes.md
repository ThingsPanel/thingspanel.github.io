---
sidebar_position: 3
---

# 路由

## 一、系统路由说明

本系统的路由基于插件 Elegant Router，详细用法请查看插件文档。

## 二、重要警告

由于使用了 `<Transition>` 标签支持页面过渡动画，所以在页面的 `.vue` 文件的 `template` 中只能有一个根元素，注释和纯文本都不行，必须只有一个根标签元素。相关文档：[Transition | Vue.js](https://vuejs.org/guide/built-ins/transition.html)

## 三、路由自动生成

启动项目后，插件会自动生成 `src/router/elegant` 目录，该目录下的文件为自动生成的路由导入、路由定义和路由转换的文件。

> **重要提示**
> - 路由是文件的副产物，所以删除路由的操作是删除文件，路由会跟随文件一起消失。
> - 路由支持修改的内容只有 `component` 和 `meta` 信息，自动生成的操作不会影响到这两个属性。

## 四、配置属性

### 1. RouteKey 类型
**解释**：联合类型 `RouteKey` 声明所有的路由 key，方便统一管理路由，该类型由插件 Elegant Router 根据 views 下面的页面文件自动生成。

**代码位置**：`src/typings/elegant-router.d.ts`

### 2. RoutePath 类型
**解释**：路由的路径 path，该类型与 RouteKey 一一对应。

### 3. RouteMeta 接口

```typescript
interface RouteMeta {
  /** 路由标题，可用于文档标题中 */
  title: string;

  /** 路由的国际化键值，如果设置，将用于i18n，此时title将被忽略 */
  i18nKey?: App.I18n.I18nKey;

  /** 路由的角色列表，当前用户拥有至少一个角色时，允许访问该路由，角色列表为空时，表示无需权限 */
  roles?: string[];

  /** 是否缓存该路由 */
  keepAlive?: boolean;

  /** 是否为常量路由，无需登录，并且该路由在前端定义 */
  constant?: boolean;

  /** Iconify 图标，可用于菜单或面包屑中 */
  icon?: string;

  /** 本地图标，存在于 "src/assets/svg-icon" 目录下，如果设置，将忽略icon属性 */
  localIcon?: string;

  /** 路由排序顺序 */
  order?: number;

  /** 路由的外部链接 */
  href?: string;

  /** 是否在菜单中隐藏该路由 */
  hideInMenu?: boolean;

  /** 进入该路由时激活的菜单键，该路由不在菜单中 */
  activeMenu?: import('@elegant-router/types').RouteKey;

  /** 默认情况下，相同路径的路由会共享一个标签页，若设置为true，则使用多个标签页 */
  multiTab?: boolean;

  /** 若设置，路由将在标签页中固定显示，其值表示固定标签页的顺序（首页是特殊的，它将自动保持fixed） */
  fixedIndexInTab?: number;

  /** 路由查询参数，如果设置的话，点击菜单进入该路由时会自动携带的query参数 */
  query?: { key: string; value: string }[] | null;
}
```

### 4. 使用提示

1. **图标获取**：icon 图标值可以从 [icones.js.org](https://icones.js.org/) 获取。

2. **隐藏菜单项**：如果在 views 中创建了一个路由页面，在别的地方调用但不在菜单那边显示，那么需要设置 meta 中的 `hideInMenu: true`。

示例：
```typescript
{
    name: '403',
    path: '/403',
    component: 'layout.blank$view.403',
    meta: {
      title: '403',
      i18nKey: 'route.403',
      hideInMenu: true
    }
}
```
