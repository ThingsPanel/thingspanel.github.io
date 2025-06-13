---
sidebar_position: 4
---

# 多主题开发

## 一、概述
ThingsPanel系统主题的实现分为两个部分，一部分是组件库的主题配置，另一部分是 UnoCSS 的主题配置。为了统一两个部分的主题配置，在这之上维护了一些主题配置，通过这些主题配置分别控制组件库和 UnoCSS 的主题配置。

## 二、原理
1. 定义一些主题配置的变量，包括各种主题颜色，布局的参数配置等
2. 通过这些配置产出符合组件库的主题变量
3. 通过这些配置产出一些主题 tokens 并衍生出对应的 css 变量，再将这些 css 变量传递给 UnoCSS

## 三、主题配置

### 1. 类型定义
主题配置的类型定义见 `App.Theme.ThemeSetting`

**代码位置**：`src/typings/app.d.ts`

### 2. 初始化配置
```typescript
export const themeSettings: App.Theme.ThemeSetting = {
  //默认配置
};
```

**代码位置**：`src/theme/settings.ts`

### 3. 配置覆盖更新
当发布新的版本时，可以通过配置覆盖更新的方式，来更新主题配置

```typescript
export const overrideThemeSettings: Partial<App.Theme.ThemeSetting> = {
  //覆盖配置
};
```

**代码位置**：`src/theme/settings.ts`

### 4. 环境说明

#### 开发环境
- 当项目处于开发模式时，主题配置不会被缓存
- 可以通过更新 `src/theme/settings.ts` 中的 `themeSettings` 来更新主题配置
- 开发阶段为了能够实时看到主题配置的变化，所以不会缓存主题配置

#### 生产环境
- 当项目处于生产模式时，主题配置会被缓存到 localStorage 中
- 每次发布新版本，可以通过更新 `src/theme/settings.ts` 中的 `overrideThemeSettings` 来覆盖更新主题配置

## 四、主题 Tokens

### 1. 类型定义
```typescript
type ThemeToken = {
  colors: ThemeTokenColor;
  boxShadow: {
    header: string;
    sider: string;
    tab: string;
  };
};
```

**代码位置**：`src/typings/app.d.ts`

### 2. 基于 Tokens 的 CSS 变量
初始化时会在 html 上生成一些 css 变量，这些 css 变量是基于主题 tokens 产出的

```typescript
/** Theme vars */
export const themeVars: App.Theme.ThemeToken = {
  colors: {
    ...colorPaletteVars,
    nprogress: 'rgb(var(--nprogress-color))',
    container: 'rgb(var(--container-bg-color))',
    layout: 'rgb(var(--layout-bg-color))',
    inverted: 'rgb(var(--inverted-bg-color))',
    base_text: 'rgb(var(--base-text-color))'
  },
  boxShadow: {
    header: 'var(--header-box-shadow)',
    sider: 'var(--sider-box-shadow)',
    tab: 'var(--tab-box-shadow)'
  }
};
```

**代码位置**：`src/theme/vars.ts`

### 3. Tokens 初始化
```typescript
/**
 * Create theme token
 *
 * @param colors Theme colors
 */
export function createThemeToken(colors: App.Theme.ThemeColor) {
  const paletteColors = createThemePaletteColors(colors);

  const themeTokens: App.Theme.ThemeToken = {
    colors: {
      ...paletteColors,
      nprogress: paletteColors.primary,
      container: 'rgb(255, 255, 255)',
      layout: 'rgb(247, 250, 252)',
      inverted: 'rgb(0, 20, 40)',
      base_text: 'rgb(31, 31, 31)'
    },
    boxShadow: {
      header: '0 1px 2px rgb(0, 21, 41, 0.08)',
      sider: '2px 0 8px 0 rgb(29, 35, 41, 0.05)',
      tab: '0 1px 2px rgb(0, 21, 41, 0.08)'
    }
  };

  const darkThemeTokens: App.Theme.ThemeToken = {
    colors: {
      ...themeTokens.colors,
      container: 'rgb(28, 28, 28)',
      layout: 'rgb(18, 18, 18)',
      base_text: 'rgb(224, 224, 224)'
    },
    boxShadow: {
      ...themeTokens.boxShadow
    }
  };

  return {
    themeTokens,
    darkThemeTokens
  };
}
```

**代码位置**：`src/store/modules/theme/shared.ts`

## 五、UnoCSS 主题

### 1. 主题配置
通过 Theme Tokens 注入到 UnoCSS 的主题配置中，借助于 UnoCSS 的能力，可以使用类似 `text-primary` `bg-primary` 等 class 名称进而统一了组件库和 UnoCSS 的主题颜色的应用。

```typescript
import { themeVars } from './src/theme/vars';

export default defineConfig<Theme>({
  theme: {
    ...themeVars
  }
});
```

**代码位置**：`./uno.config.ts`

### 2. 暗黑模式
通过 UnoCSS 提供的预设暗黑模式方案，只要在 html 上添加 `class="dark"`，则项目中类似于 `dark:text-#000` `dark:bg-#333` 的 class 就会生效，从而达到暗黑模式的效果。

```typescript
export default defineConfig<Theme>({
  presets: [presetUno({ dark: 'class' })]
});
```

**代码位置**：`./uno.config.ts`

## 六、组件库主题

### 1. NaiveUI 主题配置

#### 主题变量生成
根据主题颜色产出组件库的主题变量：

```typescript
/**
 * Get naive theme
 *
 * @param colors Theme colors
 */
function getNaiveTheme(colors: App.Theme.ThemeColor) {
  const { primary: colorLoading } = colors;

  const theme: GlobalThemeOverrides = {
    common: {
      ...getNaiveThemeColors(colors)
    },
    LoadingBar: {
      colorLoading
    }
  };

  return theme;
}

/** Naive theme */
const naiveTheme = computed(() => getNaiveTheme(themeColors.value));
```

**代码位置**：
- `src/store/modules/theme/shared.ts`
- `src/store/modules/theme/index.ts`

#### 应用主题变量
```vue
<template>
  <NConfigProvider
    :theme="naiveDarkTheme"
    :theme-overrides="themeStore.naiveTheme"
    :locale="naiveLocale"
    :date-locale="naiveDateLocale"
    class="h-full"
  >
    <AppProvider>
      <RouterView class="bg-layout" />
    </AppProvider>
  </NConfigProvider>
</template>
```

**代码位置**：`src/App.vue`

### 2. AntDesignVue 主题配置

#### 主题变量生成
根据主题颜色产出组件库的主题变量：

```typescript
/**
 * Get antd theme
 *
 * @param colors Theme colors
 * @param darkMode Is dark mode
 */
function getAntdTheme(colors: App.Theme.ThemeColor, darkMode: boolean) {
  const { defaultAlgorithm, darkAlgorithm } = antdTheme;

  const { primary, info, success, warning, error } = colors;

  const theme: ConfigProviderProps['theme'] = {
    token: {
      colorPrimary: primary,
      colorInfo: info,
      colorSuccess: success,
      colorWarning: warning,
      colorError: error
    },
    algorithm: [darkMode ? darkAlgorithm : defaultAlgorithm],
    components: {
      Menu: {
        colorSubItemBg: 'transparent'
      }
    }
  };

  return theme;
}

/** Antd theme */
const antdTheme = computed(() => getAntdTheme(themeColors.value, darkMode.value));
```

**代码位置**：
- `src/store/modules/theme/shared.ts`
- `src/store/modules/theme/index.ts`

#### 应用主题变量
```vue
<template>
  <ConfigProvider :theme="themeStore.antdTheme" :locale="antdLocale">
    <AppProvider>
      <RouterView class="bg-layout" />
    </AppProvider>
  </ConfigProvider>
</template>
```

## 七、系统 Logo 与加载样式

### 1. 系统 Logo

系统 Logo 由组件 `SystemLogo` 来实现，它是一个 SFC 组件，可以通过 props 来设置它的样式。

```vue
<script lang="ts" setup>
defineOptions({ name: 'SystemLogo' });
</script>

<template>
  <icon-local-logo />
</template>

<style scoped></style>
```

**代码位置**：`src/components/common/system-logo.vue`

具体实现原理参考本地 Icon。

### 2. 系统加载样式

系统初始化时的加载样式通过 html 代码方式实现。

#### 组件位置
`src/plugins/loading.ts`

#### 渲染原理
创建 `setupLoading` 函数，它的主要功能是设置页面加载时的动画效果。这个加载动画包括：
- 系统 Logo
- 旋转的点阵动画
- 标题文字

所有元素的颜色均基于从本地存储获取的主题色 `themeColor` 动态生成。并且在 DOM 中查找 ID 为 app 的元素作为加载动画的挂载点，如果找到了这个元素，则将其内部 HTML 替换为刚刚构建的加载动画 HTML 结构。

```typescript
export function setupLoading() {
  const themeColor = localStg.get('themeColor') || '#DB5A6B';

  const { r, g, b } = getRgbOfColor(themeColor);

  const primaryColor = `--primary-color: ${r} ${g} ${b}`;

  const loadingClasses = [
    'left-0 top-0',
    'left-0 bottom-0 animate-delay-500',
    'right-0 top-0 animate-delay-1000',
    'right-0 bottom-0 animate-delay-1500'
  ];

  const logoWithClass = systemLogo.replace('<svg', `<svg class="size-128px text-primary"`);

  const dot = loadingClasses
    .map(item => {
      return `<div class="absolute w-16px h-16px bg-primary rounded-8px animate-pulse ${item}"></div>`;
    })
    .join('\n');

  const loading = `
<div class="fixed-center flex-col" style="${primaryColor}">
  ${logoWithClass}
  <div class="w-56px h-56px my-36px">
    <div class="relative h-full animate-spin">
      ${dot}
    </div>
  </div>
  <h2 class="text-28px font-500 text-#646464">${$t('system.title')}</h2>
</div>`;

  const app = document.getElementById('app');

  if (app) {
    app.innerHTML = loading;
  }
}
```

**代码位置**：`src/plugins/loading.ts`

最后要将 `setupLoading` 函数注册到 `main.ts` 中：

```typescript
async function setupApp() {
  setupLoading();
  app.mount('#app');
}
```

