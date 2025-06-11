import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Docs",
  description: "A VitePress Site",
  lang: 'zh-CN',
  cleanUrls:true,

  lastUpdated: true,

  markdown: {
    //行号显示
    lineNumbers: true,

    // toc显示一级标题
    toc: {level: [1,2,3]},

    // 使用 `!!code` 防止转换
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },
  

  vite: {
    plugins: [
      groupIconVitePlugin()
    ]
  },


  themeConfig: {
    outline: {
      level: [2,3],
      label: '当前页大纲'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },
    search: { 
      provider: 'local'
    }, 

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guides',
        items: [
          { text: 'Linux', link: '/linux/前言' }
        ]
    },
    ],

    sidebar: {
      '/linux/': [
        {
          text: '简介',
          items: [
            { text: '什么是Linux', link: '/linux/base/系统概述' },
          ]
        },
        {
          text: 'Base',
          collapsed: false,
          items: [
            { text: '用户与权限', link: '/linux/base/用户与权限' },
            { text: '文件系统与管理', link: '/linux/base/文件系统与管理' }
          ]
        },
        {
          text: 'Package Management',
          collapsed: false,
          items: [
            { text: '镜像源', link: '/linux/package/repo' },
            { text: 'Package Manager', link: '/linux/package/PackageManager' }
          ]
        }
      ],
      // '/guide/windows/': [
      //   {
      //     text: '基础',
      //     collapsible: true,
      //     collapsed: false,
      //     items: [
      //       { text: '系统简介', link: '/guide/windows/base/系统简介' },
      //       { text: '用户管理', link: '/guide/windows/base/用户管理' }
      //     ]
      //   }
      // ]
    },
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
