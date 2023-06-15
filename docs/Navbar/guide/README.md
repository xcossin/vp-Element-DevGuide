# 文档指南

## 网站介绍
<font style="color: #FF00BB">介绍由chatGpt3.5生成</font>

**数字花园**：记录 **Element-UI 和 Echarts** 的前端开发案例

欢迎来到数字花园！这是一个专注于记录 Element-UI 和 Echarts 的前端开发案例的网站，旨在为前端开发程序员提供一个集中、实用的学习平台。

我们的网站主要关注两个主题：Element-UI 和 Echarts。Element-UI 是一个流行的 Vue.js 组件库，提供丰富的 UI 组件和工具，而 Echarts 是一个强大的数据可视化库，可以帮助开发者创建令人惊叹的图表和图形。

在数字花园，你可以找到大量的使用案例和教程，以帮助你深入了解如何在你的项目中使用 Element-UI 和 Echarts。我们的案例研究将涵盖各种常见的功能和应用场景，从基本的表单和布局到复杂的数据可视化和交互操作。

为了让你更好地理解和掌握这些技术，我们提供了实时交互的代码预览功能。你可以直接复制，调试，并实时查看结果(一些console.log输出需要F12打开控制台)。这将帮助你快速测试和调试你的代码，以确保你理解了每个案例的实现原理和实现效果。

我们的网站使用了 VuePress 来搭建，这意味着我们支持 Markdown 语法，使得撰写和维护文档变得非常简单和高效。你可以轻松地创建和编辑教程和案例研究，使用 Markdown 的强大功能来展示代码块、标题、链接和图片。

对于部署，我们使用了 VuePress 提供的默认方式。这意味着我们可以轻松构建并部署网站，让你可以快速访问我们的内容。

数字花园是一个充满活力的社区，我们欢迎你的加入！你可以从我们的案例中获取灵感，学习最佳实践，并与其他开发者分享你的经验。我们也提供丰富的文档和支持资源，帮助你更好地使用 Element-UI 和 Echarts。

立即访问数字花园，探索 Element-UI 和 Echarts 的奇妙世界！让我们一起开拓前端开发的新境界吧！

## 技术栈

<font color=#4c9feb size=''>该文档基于**VuePress v1.x**开发，搭配**Element-ui**框架，主要记载关于适配vue v2.x的Element-ui框架的解决方案</font>
::: warning 前提条件
**VuePress v1.x** 需要 **Node.js** (opens new window)>= 8.6 才能正常运行
:::

<!-- 除此之外，还展示一些插件的使用案例，参考[插件](./plugin) -->

## 文件目录结构
```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   │   ├── images(非首页静态资源存放)
│   │   │   ├── index(首页静态资源存放)
│   │   ├── styles (可选的)
│   │   │   ├── index.css(重置或设置首页样式)
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的:配置文件)
│   │   ├── enhanceApp.js (可选的:应用级别的配置)
│   │   ├── components (组件库)
│   │   │   ├── Element-fun(功能方案库)
│   │   │   ├── Element-sty(样式模板库)
│   │   │   └── Echarts(echarts案例)
│   │ 
│   ├── README.md(首页)
│   ├── guide
│   │   └── README.md(文档指南)
│   └── config.md
│
│   ├── .deploy (发布脚本)
└── package.json
```
## 特别补充
::: tip 说明
笔者网上查阅资料后发现适用于**vue 2x**的**Element-ui**只支持在**VuePress v1.x**中使用,**VuePress v2.x**只支持**Element-Plus**，由于部分案例代码过长，为了便于案例展示采用了[demo-container](https://docs.chenjianhui.site/vuepress-plugin-demo-container/zh/)插件的代码块折叠功能。而该插件会导致一些兼容性问题。
较为明显的问题体现在：
1. 不支持import语法
2. 不能识别style 的 scoped

为了在此项目中能正常使用代码块插件和不支持语法兼容，一些原本在各个开发文档中表明的import方法改为使用require代替，为避免误导特此说明。
:::

