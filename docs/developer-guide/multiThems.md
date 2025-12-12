---
sidebar_position: 4
---

# Multi-theme Development

## I. Overview
The implementation of themes in ThingsPanel is divided into two parts: one is the theme configuration of the component library, and the other is the theme configuration of UnoCSS. In order to unify the theme configuration of these two parts, some theme configurations are maintained on top of this, controlling the theme configuration of the component library and UnoCSS respectively.

## II. Principle
1. Define theme configuration variables, including various theme colors, layout parameter configurations, etc.
2. Produce theme variables that conform to the component library through these configurations.
3. Produce theme tokens and derived CSS variables through these configurations, and then pass these CSS variables to UnoCSS.

## III. Theme Configuration

### 1. Type Definition
See `App.Theme.ThemeSetting` for theme configuration type definitions.

**Code Location**: `src/typings/app.d.ts`

### 2. Initial Configuration
```typescript
export const themeSettings: App.Theme.ThemeSetting = {
  // default config
};
```

**Code Location**: `src/theme/settings.ts`

### 3. Override Configuration via Update
When releasing a new version, you can update the theme configuration by overriding it.

```typescript
export const overrideThemeSettings: Partial<App.Theme.ThemeSetting> = {
  // override config
};
```

**Code Location**: `src/theme/settings.ts`

### 4. Environment Explanation

#### Development Environment
- Theme configuration is not cached in development mode.
- Update `themeSettings` in `src/theme/settings.ts` to update theme configuration.
- To see changes in real-time, caching is disabled during development.

#### Production Environment
- In production mode, theme configuration is cached in localStorage.
- For each new release, update `overrideThemeSettings` in `src/theme/settings.ts` to override and update the theme configuration.

## IV. Theme Tokens

### 1. Type Definition
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

**Code Location**: `src/typings/app.d.ts`

### 2. CSS Variables Based on Tokens
Some CSS variables are generated on html during initialization, based on theme tokens.

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

**Code Location**: `src/theme/vars.ts`

### 3. Token Initialization
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

**Code Location**: `src/store/modules/theme/shared.ts`

## V. UnoCSS Theme

### 1. Theme Configuration
Inject Theme Tokens into UnoCSS configuration. With UnoCSS capabilities, you can use classes like `text-primary` `bg-primary` to unify theme color application across the component library and UnoCSS.

```typescript
import { themeVars } from './src/theme/vars';

export default defineConfig<Theme>({
  theme: {
    ...themeVars
  }
});
```

**Code Location**: `./uno.config.ts`

### 2. Dark Mode
Using UnoCSS's preset dark mode, adding `class="dark"` to html enables dark mode classes like `dark:text-#000` `dark:bg-#333`.

```typescript
export default defineConfig<Theme>({
  presets: [presetUno({ dark: 'class' })]
});
```

**Code Location**: `./uno.config.ts`

## VI. Component Library Theme

### 1. NaiveUI Theme Configuration

#### Generating Theme Variables
Generate component library theme variables based on theme colors:

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

**Code Location**:
- `src/store/modules/theme/shared.ts`
- `src/store/modules/theme/index.ts`

#### Applying Theme Variables
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

**Code Location**: `src/App.vue`

### 2. AntDesignVue Theme Configuration

#### Generating Theme Variables
Generate component library theme variables based on theme colors:

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

**Code Location**:
- `src/store/modules/theme/shared.ts`
- `src/store/modules/theme/index.ts`

#### Applying Theme Variables
```vue
<template>
  <ConfigProvider :theme="themeStore.antdTheme" :locale="antdLocale">
    <AppProvider>
      <RouterView class="bg-layout" />
    </AppProvider>
  </ConfigProvider>
</template>
```

## VII. System Logo and Loading Style

### 1. System Logo

The System Logo is implemented by the `SystemLogo` component (SFC), styled via props.

```vue
<script lang="ts" setup>
defineOptions({ name: 'SystemLogo' });
</script>

<template>
  <icon-local-logo />
</template>

<style scoped></style>
```

**Code Location**: `src/components/common/system-logo.vue`

Refer to local Icon implementation for details.

### 2. System Loading Style

Initialization loading style is implemented via HTML code.

#### Component Location
`src/plugins/loading.ts`

#### Rendering Principle
Create `setupLoading` function to set page loading animation. Includes:
- System Logo
- Rotating dot animation
- Title text

All element colors are dynamically generated based on `themeColor` from local storage. It finds the element with ID `app` and replaces its inner HTML with the loading animation structure.

```typescript
export function setupLoading() {
  const themeColor = localStg.get('themeColor') || '#DB5A6B';

  const { r, g, b } = getRgbOfColor(themeColor);

  const primaryColor = `--primary-color: ${r} ${g} ${b}`;
  // ... (code omitted for brevity)
  const app = document.getElementById('app');

  if (app) {
    app.innerHTML = loading;
  }
}
```

**Code Location**: `src/plugins/loading.ts`

Register `setupLoading` in `main.ts`:

```typescript
async function setupApp() {
  setupLoading();
  app.mount('#app');
}
```
