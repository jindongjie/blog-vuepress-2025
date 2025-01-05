export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/LFS_SYSV_CN.html", { loader: () => import(/* webpackChunkName: "LFS_SYSV_CN.html" */"/home/ar0m/Projects/blog-vuepress-2025/docs/.vuepress/.temp/pages/LFS_SYSV_CN.html.js"), meta: {"title":"Linux From Scratch"} }],
  ["/LFS_SYSV_EN.html", { loader: () => import(/* webpackChunkName: "LFS_SYSV_EN.html" */"/home/ar0m/Projects/blog-vuepress-2025/docs/.vuepress/.temp/pages/LFS_SYSV_EN.html.js"), meta: {"title":"Linux From Scratch"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/ar0m/Projects/blog-vuepress-2025/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/ar0m/Projects/blog-vuepress-2025/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/ar0m/Projects/blog-vuepress-2025/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
