import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",
  locales: {
    "/": {
      lang: "en-US",
      title: "My Blog",
      description: "This is my blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "我的博客",
      description: "这是我的博客",
    },
  },
  theme: plumeTheme({
    locales: {
      "/": {
        navbar: [
          { text: "Home", link: "/", icon: "material-symbols:home-app-logo" },
          {
            text: "Blog",
            link: "/blog/",
            icon: "solar:documents-linear",
          },
          {
            text: "Tags",
            link: "/blog/tags/",
            icon: "solar:tag-linear",
          },
          {
            text: "Archives",
            link: "/blog/archives/",
            icon: "solar:inbox-archive-linear",
          },
        ],
        selectLanguageName: "English",
      },
      "/zh/": {
        navbar: [
          {
            text: "主页",
            link: "/zh/",
            icon: "material-symbols:home-app-logo",
          },
          {
            text: "博客",
            link: "/zh/blog/",
            icon: "solar:documents-linear",
          },
          {
            text: "标签",
            link: "/zh/blog/tags/",
            icon: "solar:tag-linear",
          },
          {
            text: "归档",
            link: "/zh/blog/archives/",
            icon: "solar:inbox-archive-linear",
          },
        ],
        selectLanguageName: "简体中文",
      },
    },
    plugins: {
      shiki: {
        languages: [
          "javascript",
          "typescript",
          "vue",
          "bash",
          "sh",
          "json",
          "yaml",
          "css",
          "html",
          "rust",
          "c",
          "csharp",
        ],
      },
      markdownPower: {
        demo: true,
        imageSize: true, // 'local' | 'all'
      },
      comment: {
        provider: "Twikoo",
        comment: true,
        envId: 'https://ar0m.com/cloudflare-twikoo',
      }
    },
    contributors: false,
    copyright: "CC-BY-NC-4.0",

    hostname: "https://ar0m.com",

    // footer: {
    // message: "",
    // },
  }),
  bundler: viteBundler(),
});
