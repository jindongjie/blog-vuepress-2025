# 快速开始

这是一个普通页面，包含 VuePress 基础知识。

## 页面

您可以在您的 vuepress 目录中添加 markdown 文件，每个 markdown 文件都将被转换为您网站中的一个页面。

更多详情请参见 [路由][]。

## 内容

每个 markdown 文件都[将被渲染为 HTML，然后转换为 Vue SFC][content]。

VuePress 支持基本的 markdown 语法和[一些扩展][synatex-extensions]，您还可以在其中[使用 Vue 功能][vue-feature]。

## 配置

VuePress 使用 `.vuepress/config.js`（或 .ts）文件作为[站点配置][config]，您可以使用它来配置您的站点。

对于[客户端配置][client-config]，您可以创建 `.vuepress/client.js`（或 .ts）。

同时，您还可以使用 [frontmatter][] 添加每个页面的配置。

## 布局和自定义

以下是控制 `@vuepress/theme-default` 布局的常见配置：

- [navbar][]
- [sidebar][]

有关完整参考，请查看[默认主题文档][default-theme]。

您可以使用 `.vuepress/styles/index.scss` 文件[添加额外的样式][style]。

[routing]: https://vuejs.press/guide/page.html#routing
[content]: https://vuejs.press/guide/page.html#content
[synatex-extensions]: https://vuejs.press/guide/markdown.html#syntax-extensions
[vue-feature]: https://vuejs.press/guide/markdown.html#using-vue-in-markdown
[config]: https://vuejs.press/guide/configuration.html#client-config-file
[client-config]: https://vuejs.press/guide/configuration.html#client-config-file
[frontmatter]: https://vuejs.press/guide/page.html#frontmatter
[navbar]: https://vuejs.press/reference/default-theme/config.html#navbar
[sidebar]: https://vuejs.press/reference/default-theme/config.html#sidebar
[default-theme]: https://vuejs.press/reference/default-theme/
[style]: https://vuejs.press/reference/default-theme/styles.html#style-file
