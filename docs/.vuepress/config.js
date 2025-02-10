import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
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
            text: 'Blog',
            link: '/blog/',
          },
          { text: 'Tags', link: '/blog/tags/' },
          { text: 'Archives', link: '/blog/archives/' }
        ],
        selectLanguageName: 'English',
      },
      '/zh/': {
        navbar: [
          '/zh/',
          {
            text: '博客',
            link: '/zh/blog/',
          },
          { text: '标签', link: '/zh/blog/tags/' },
          { text: '归档', link: '/zh/blog/archives/' }
        ],
        selectLanguageName: '简体中文',
      },
    },
  }),
  bundler: viteBundler(),
})
