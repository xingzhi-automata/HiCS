const { description } = require('../../package')

module.exports = {
  base: '/HiCS/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Hi, CS 👋',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#0277bd' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/xingzhi-automata/HiCS',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: '介绍',
        link: '/intro/',
        items: [
          {text: '前言', link: '/intro/'},
          {text: '简介', link: '/intro/welcome'}
        ]
      }
    ],
    sidebar: {
      '/intro/': [
        '',
        'welcome',
      ],
    }
  },
  markdown: {
    toc: {
      includeLevel: [2, 3]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  }
}
