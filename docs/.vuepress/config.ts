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
   // Add head option to include the Rybbit script on all pages
  head: [
    [
      'script', 
      {
        src: 'https://app.rybbit.io/api/script.js',
        'data-site-id': '493',
        defer: true
      }
    ]
  ],
  theme: plumeTheme({
    locales: {
      "/": {
        collections: [
          {
            type: "post",
            title: "Blog",
            dir: "gentoo",
            link: "/article/",
            linkPrefix: "/article/",
            autoFrontmatter: false,
          },
        ],
        navbar: [
          { text: "Home", link: "/", icon: "material-symbols:home-app-logo" },
          {
            text: "Blog",
            link: "/article/",
            icon: "solar:documents-linear",
          },
          {
            text: "Tags",
            link: "/article/tags/",
            icon: "solar:tag-linear",
          },
          {
            text: "Archives",
            link: "/article/archives/",
            icon: "solar:inbox-archive-linear",
          },
        ],
        selectLanguageName: "English",
      },
      "/zh/": {
        collections: [
          {
            type: "post",
            title: "博客",
            dir: "zh",
            link: "/article/",
            linkPrefix: "/article/",
            include: ["**/*.md"],
            exclude: ["index.md"],
            autoFrontmatter: false,
          },
        ],
        navbar: [
          {
            text: "主页",
            link: "/zh/",
            icon: "material-symbols:home-app-logo",
          },
          {
            text: "博客",
            link: "/zh/article/",
            icon: "solar:documents-linear",
          },
          {
            text: "标签",
            link: "/zh/article/tags/",
            icon: "solar:tag-linear",
          },
          {
            text: "归档",
            link: "/zh/article/archives/",
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
