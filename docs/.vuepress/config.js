const moment = require('moment');
module.exports = {
  theme: '',
  title: '数字花园',
  description: '个人搭建的数字花园',
  base: '/vp-Element-DevGuide-demo/',
  port: '8080',
  head: [
    // 必须使用icon后缀文件
    ['link', { rel: 'icon', href: '/vp-Element-DevGuide-demo/favicon.ico' }]
  ],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: '数字花园',
      description: 'Vue 驱动的静态网站生成器',
      lastUpdated: '上次更新',
      // 配置demo-block的的中文显示
      "demo-block": {
        "hide-text": "隐藏代码",
        "show-text": "显示代码",
        "copy-text": "复制代码",
        "copy-success": "复制成功"
      }
    },
    /* '/en/': {
      lang: 'en-US', 
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    } */
  },
  themeConfig: {
    '/zh/': {
      sidebar: 'auto'
    },
    // 左上角logo
    logo: '/index/logo.png',
    // 最后更新时间
    lastUpdated: '最后更新时间', // string | boolean
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    // 页面滚动
    // smoothScroll: true,
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    // repo: 'https://github.com/xcossin/vp-Element-DevGuide.git',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: false,
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上查看此页源码！',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '指南',
        link: '/Navbar/guide/'
      },
      {
        text: 'JS',
        link: '/components/JsFun/'
      },
      {
        text: '插件',
        link: '/Navbar/plugin/'
      },
      /* {
        text: 'Element样式案例',
        link: '/components/Element-sty/'
      }, */
      {
        text: 'Element案例',
        link: '/components/Element-fun/'
      },
      {
        text: 'Echarts相关',
        link: '/components/Echarts/'
      },
      {
        text: '项目地址',
        items: [
          { text: 'github', link: 'https://github.com/xcossin/vp-Element-DevGuide.git' },
          { text: 'gitee', link: '/language/c' }
        ]
      },
      {
        text: '三方库地址',
        items: [
          { text: 'Echarts', link: 'https://echarts.apache.org/examples/zh/index.html' },
          { text: 'Element UI', link: 'https://element.eleme.cn/#/zh-CN/component/installation' },
          { text: 'VuePress v1.x', link: 'https://vuepress.vuejs.org/zh/' },
          { text: 'MarkDown语法', link: 'https://www.5axxw.com/wiki/content/xbl296' },
        ]
      },
    ],
    sidebar: {
      // '/Navbar/plugin/': [
      //   '/Navbar/plugin/',
      // ],
      '/Navbar/guide/': [
        '/Navbar/guide/',
        /* {
          title: '文档指南',
          // 是否折叠 false - 打开 true 关闭  默认第一个分组自动为打开
          collapsable: true,
          children: [
            '/guide/',
          ]
        }, */
      ],
      '/components/JsFun/': [
        '/components/JsFun/',
        '/components/JsFun/jsFun',
        '/components/JsFun/jsData',
        /* {
          title: '文档指南',
          // 是否折叠 false - 打开 true 关闭  默认第一个分组自动为打开
          collapsable: true,
          children: [
            '/guide/',
          ]
        }, */
      ],
      '/components/Element-sty/': [
        {
          title: 'Element UI 样式修改',
          // 是否折叠 false - 打开 true 关闭  默认第一个分组自动为打开
          collapsable: true,
          children: [
            '/components/Element-sty/',
            '/components/Element-sty/Select.md',
            '/components/Element-sty/Button.md',
            '/components/Element-sty/Upload.md',
            '/components/Element-sty/Tree.md',
          ]
        },
        {
          title: 'Element UI 样式案例',
          // 是否折叠 false - 打开 true 关闭  默认第一个分组自动为打开
          collapsable: true,
          children: [
            '/components/Element-sty/',
            '/components/Element-sty/Select.md',
            '/components/Element-sty/Button.md',
            '/components/Element-sty/Upload.md',
            '/components/Element-sty/Tree.md',
          ]
        },
      ],
      '/components/Element-fun/': [
        {
          title: 'Element UI 功能案例',
          // 是否折叠 false - 打开 true 关闭  默认第一个分组自动为打开
          collapsable: true,
          children: [
            '/components/Element-fun/',
            '/components/Element-fun/Select.md',
            '/components/Element-fun/Button.md',
            '/components/Element-fun/Upload.md',
            '/components/Element-fun/Tree.md',
          ]
        },
      ],
      '/components/Echarts/': [
        {
          title: 'Echarts案例',
          // 是否折叠 false - 打开 true 关闭  默认第一个分组自动为打开
          collapsable: true,
          children: [
            '/components/Echarts/',
            {
              title:'柱状图',
              collapsable: true,
              children:[
                '/components/Echarts/Bar/',
                '/components/Echarts/Bar/BarAxis.md',
                '/components/Echarts/Bar/BarLegend.md',
                '/components/Echarts/Bar/Series.md',
                '/components/Echarts/Bar/ToolBox.md',
                '/components/Echarts/Bar/Tooltip.md',
                '/components/Echarts/Bar/BarStyle.md',
              ],
            },
            {
              title:'折线图',
              children:[
                '/components/Echarts/Line/',
                '/components/Echarts/Line/Line.md',
              ],
            },
            // '/components/Echarts/Line.md',
            '/components/Echarts/Pie.md',
          ]
        },
      ]
      
    }
  },
  head: [],
  plugins: [
    // 详细配置格式
    // ['',{}],
    // 回到顶部按钮
    '@vuepress/back-to-top',
    // 一个基于 nprogress 的进度条插件。
    '@vuepress/nprogress',
    // 代码块折叠
    ['demo-container',{}],
    // 最后更新时间插件
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        },
        lang:'最后更新时间'
      }
    ],
    // 樱花动效
    /* ["sakura", {
      num: 20,  // 默认数量
      show: true, //  是否显示
      zIndex: 999999999,   // 层级
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: '...'     // 绝对路径
      }     
    }] */
  ], 
  markdown: {},
  // 出现 global is not defined 加了此属性
  configureWebpack: {
    node: {
      // 解决 引入 Echarts报错 Uncaught ReferenceError: global is not defined
      global: true,
      process: true
    },
  },
}