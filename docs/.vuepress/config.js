import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'en-US',
      title: 'My Blog',
      description: 'This is my blog',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '我的博客',
      description: '这是我的博客',
    },
  },
  theme: plumeTheme({
    locales: {
      '/': {
        navbar: [
          '/',
          {
            text: 'Article',
            link: '/article/',
          },
          {
            text: 'Category',
            link: '/category/',
          },
          {
            text: 'Tag',
            link: '/tag/',
          },
          {
            text: 'Timeline',
            link: '/timeline/',
          },
        ],
        selectLanguageName: 'English',
      },
      '/zh/': {
        navbar: [
          '/zh/',
          {
            text: '文章',
            link: '/zh/article/',
          },
          {
            text: '分类',
            link: '/zh/category/',
          },
          {
            text: '标签',
            link: '/zh/tag/',
          },
          {
            text: '时间轴',
            link: '/zh/timeline/',
          },
        ],
        selectLanguageName: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        tip: '提示',
        warning: '注意',
        danger: '警告',
      },
    },
  }),
  plugins: [
    blogPlugin({
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt: typeof frontmatter.excerpt === 'string' ? frontmatter.excerpt : data?.excerpt || '',
      }),
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== 'string',
      category: [
        {
          key: 'category',
          getter: (page) => page.frontmatter.category || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: () => ({
            title: '分类',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `分类 ${name}`,
            sidebar: false,
          }),
        },
        {
          key: 'tag',
          getter: (page) => page.frontmatter.tag || [],
          layout: 'Tag',
          itemLayout: 'Tag',
          frontmatter: () => ({
            title: '标签',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `标签 ${name}`,
            sidebar: false,
          }),
        },
      ],
      type: [
        {
          key: 'article',
          path: '/article/',
          layout: 'Article',
          frontmatter: () => ({
            title: 'Articles',
            sidebar: false,
          }),
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky
            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1
            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1
            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1
            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'article-zh',
          path: '/zh/article/',
          layout: 'Article',
          frontmatter: () => ({
            title: '文章',
            sidebar: false,
          }),
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky
            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1
            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1
            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1
            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'timeline',
          filter: (page) => !!page.frontmatter.date,
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: 'Timeline',
          frontmatter: () => ({
            title: '时间轴',
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],
  bundler: viteBundler(),
})
