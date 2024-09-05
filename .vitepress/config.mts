import { DefaultTheme, defineConfig } from 'vitepress'

export default defineConfig({
  title: '巡天科技',
  lang: 'zh-Hans',
  description: "巡天科技说明文档",
  head: [
    ['link', { rel: 'icon', type: 'image/ico', href: '/public/logo.ico' }]
  ],
  themeConfig: {
    nav: nav(),
    logo: { src: '/public/logo.ico', width: 30, height: 30 },
    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '指引',
      link: '/guide/introduction',
      activeMatch: '/guide/'
    },
    {
      text: '更新日志',
      link: 'https://xtspace.yuque.com/fyho0s/kc12yl',
      activeMatch: '/reference/'
    }
  ]
}


function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '指引',
      collapsed: false,
      items: [
        { text: '介绍', link: 'introduction' }
      ]
    }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '更新日志',
      items: [
        { text: 'changelog', link: 'https://xtspace.yuque.com/fyho0s/kc12yl' }
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
