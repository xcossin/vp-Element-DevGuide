---
sidebar: auto
---
# 插件说明

## 与 VuePress 相关的精彩内容精选列表(合集)
(根据VuePress版本选择)
[github](https://github.com/vuepress/awesome-vuepress)

## VuePress插件社区(合集)
[VuePress社区](https://vuepress-community.netlify.app/zh/)

## 以下插件为本站目前在用插件
### @vuepress/back-to-top
回到顶部
[@vuepress/back-to-top](https://vuepress.vuejs.org/zh/plugin/official/plugin-back-to-top.html)

### @vuepress-plugin-sakura
sakura樱花动效
[vuepress-plugin-sakura](https://github.com/JabinPeng/vuepress-plugin-sakura)

补充说明：
初次安装后可能会报错，需要重启项目
本项目遇到的情况，只有部分页面下方的空白部分有动效，怀疑是zIndex给了-1的原因，遂设置为999999999即全页面生效


## 由于报错而移除的插件
### @vuepress-plugin-dynamic-title
动态标题
[vuepress-plugin-dynamic-title](https://github.com/moefyit/vuepress-plugin-dynamic-title)~~

补充说明：config配置后会报错>关于(showIcon报错)

---

### @vuepress-plugin-git-log
git log 日志
[vuepress-plugin-git-log](https://github.com/moefyit/vuepress-plugin-dynamic-title)

补充说明：
页面加入下方内容后会报错((author报错))
```
- 本页面的作者：{{ $page.git.author }}
- 本页面的贡献者：{{ $page.git.contributors.join(', ') }}
- 本页面的最后一次提交：{{ $page.git.commits[0].fullHash }}
```
---

### @vuepress-plugin-cursor-effects
修改点击光标效果
[vuepress-plugin-cursor-effects](https://github.com/moefyit/vuepress-plugin-cursor-effects)

补充说明：
初次安装后可能会报错，需要重启项目
最开始没安装那么多插件时生效了，后面突然报错：Uncaught TypeError: j is not a constructor，更奇怪的是有时候会报错，有时候不会报错
```
[
  'cursor-effects',
  {
    size: 2, // size of the particle, default: 2
    shape: ['star' | 'circle'], // shape of the particle, default: 'star'
    zIndex: 999999999, // z-index property of the canvas, default: 999999999
  },
],
```
---

### @vuepress-plugin-nuggets-style-copy

代码复制
[vuepress-plugin-nuggets-style-copy](https://www.npmjs.com/package/vuepress-plugin-nuggets-style-copy)

补充说明：
报错
```
["vuepress-plugin-nuggets-style-copy", {
  copyText: "复制代码",
  tip: {
      content: "复制成功"
  }
}]
```
---

### @xiaopanda/vuepress-plugin-code-copy

代码复制

[@xiaopanda/vuepress-plugin-code-copy](https://github.com/panxingcheng/vuepress-plugin-code-copy/blob/master/README.zh-CN.md)
补充说明：
报错信息：BUTTON_STATIC_ICON is not defined
```
['@xiaopanda/vuepress-plugin-code-copy', {
  buttonStaticIcon: true,
  buttonIconTitle: 'Copy',
  buttonAlign: 'top',
  buttonColor: '#ffffff'
  }
],
```


