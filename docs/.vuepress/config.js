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
    // 左上角logo
    logo: '/index/logo.png',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: 'Element样式案例',
        link: '/components/Element-sty/'
      },
      {
        text: 'Element功能案例',
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
      '/guide/': [
        '/guide/',
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
              children:[
                '/components/Echarts/Bar/',
                '/components/Echarts/Bar/BarAxis.md',
                '/components/Echarts/Bar/BarLegend.md',
              ],
            },
            '/components/Echarts/Line.md',
            '/components/Echarts/Pie.md',
          ]
        },
      ]
      
    }
  },
  head: [],
  plugins: [
    // 代码块折叠
    // 'demo-container',
    // 回到顶部按钮
    '@vuepress/back-to-top',
    // 详细配置格式
    // ['',{}],
    ['demo-container',{}],
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