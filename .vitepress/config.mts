import { DefaultTheme, defineConfig } from 'vitepress'

export default defineConfig({
  base: "/xt-editor-docs/",
  title: '巡天科技',
  lang: 'zh-Hans',
  description: "巡天科技说明文档",
  head: [
    ['link', { rel: 'icon', type: 'image/ico', href: './logo.ico' }]
  ],
  themeConfig: {
    nav: nav(),
    logo: { src: './logo.ico', width: 30, height: 30 },
    sidebar: {
      '/': { base: '/', items: sidebarGuide() }
    },
    outline: {
      label: '页面导航'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '',
      copyright: 'Copyright © 2024-杭州巡天科技有限公司'
    },
    // lastUpdated: {
    //   text: '最后更新于',
    //   formatOptions: {
    //     dateStyle: 'short',
    //     timeStyle: 'medium'
    //   }
    // }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '指引',
      link: 'introduction'
    },
    {
      text: '更新日志',
      link: 'https://xtspace.yuque.com/fyho0s/kc12yl'
    }
  ]
}


function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '引导',
      collapsed: false,
      items: [
        { text: '平台介绍', link: 'introduction' },
        { text: '快速开始', link: 'quick-start' }
      ]
    },
    {
      text: '架构设计',
      collapsed: false,
      items: [
        { text: '功能架构', link: 'business-architecture' },
        { text: '前端架构', link: 'frontend-architecture' },
        { text: '后端架构', link: 'backend-architecture' },
      ]
    }
  ]
}

export const zhSearch: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}
