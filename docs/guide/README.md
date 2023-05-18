# 文档指南

## 介绍
<font color=#FF000 size='' >技术栈:</font>

该文档基于**VuePress v1.x**开发，搭配**Element-ui**框架，主要记载关于Element-ui框架的需求解决方案
::: warning 前提条件
**VuePress v1.x** 需要 **Node.js** (opens new window)>= 8.6
:::

<!-- 除此之外，还展示一些插件的使用案例，参考[插件](./plugin) -->

## 为什么建这个模板站？
由于工作中经常遇到一些修改Element-ui组件功能与样式的需求，有些需求在项目中出现比较零散，有些在不同的项目中多次重现，为了便于后续开发效率，整合成这个文档。

## 目录结构
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
│   │   │   └── Element-sty(样式模板库)
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
笔者网上查阅资料后发现适用于**vue 2x**的**Element-ui**只能搭配**VuePress v1.x**使用,**VuePress v2.x**只支持**Element-Plus**，由于部分案例代码过长，为了便于案例展示采用了[demo-container](https://docs.chenjianhui.site/vuepress-plugin-demo-container/zh/)插件的代码块折叠功能。而该插件会导致一些兼容性问题的报错，为了在此项目中能正常使用代码块，一些原本适用于vue的import方法改为使用require代替
:::
