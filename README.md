## React 组件库实践

技术栈：React + Typescript + Less + Rollup + Storybook

组件库用 Rollup.js 构建，目前支持 2 种 format：`umd`、`esm`

样式用 style inject 方式处理，所以不存在单独的 css 产物。引入组件时也不需要额外引入.css 文件，直接引入组件 bundle 即可。

支持 alias，默认别名有：`"@/*": ["src/*"]`，可自行修改。需要注意的是 Storybook 有自己的配置在`.storybook/main.js`

## Storybook 介绍

Storybook 是一个用于构建、测试和展示 React、Vue、Angular 等 UI 组件的开源工具。它提供了一个独立的开发环境，可以让开发者在不必担心应用程序结构和业务逻辑的情况下，专注于 UI 组件的开发和测试。Storybook 具有可扩展性强、易于使用、文档丰富等特点，是开发高质量 UI 组件的利器。

### 调试

```bash
npm run site
```

### 构建文档

```bash
npm run site:static
```

相关链接：
<https://storybook.js.org/>

## 最后

如果觉得好用的话求个`star`~
