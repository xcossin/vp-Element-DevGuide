<h1 align="center">
  DigitalGarden
</h1>

> Element UI Demo 集.

## 文档

- [文档Git地址](https://github.com/xcossin/vp-Element-DevGuide.git)
- [文档demo](https://xcossin.github.io/vp-Element-DevGuide-demo/)

## 添加新效果

- nodejs 版本要求 >= 8.6。

- 确定添加新效果类型，找到对应文件夹，再确认是否存在该菜单，若不存在需在 `docs/.vuepress/config.js` 文件下配置菜单，修改`config.js`文件需重启
    - Echarts Demo 在 `echarts` 文件夹下 找到对应图表类型文件夹添加 makedown 文件，若无图表类型文件夹，则需新建
    - Highcharts Demo 在 `highcharts` 文件夹下 找到对应图表类型文件夹添加 makedown 文件，若无图表类型文件夹，则需新建
    - Animation Demo 在 `animation` 文件夹下

- 例如：新增echarts图表的柱状图bar
    - 先把效果图下载下来存放到 `/docs/echarts/bar` 下，命名为：`999.png`（注意：`999.png` 与 `999.md` 命名一致）
    - 在 `/docs/echarts/bar` 下，新增 `999.md` 图表案例文件（注意：`999.png` 与 `999.md` 命名一致）
    - 在 `/docs/echarts/bar/index.md` 文件里添加相关信息

- 若需新增组件，在 `src/components` 目录下添加
    - 目前已存在 `ScTfEchart.vue` 、  `WorksList.vue` 组件

- md文档里的`scoped`没作用，所以为了防止样式互相污染，请大家给最外层的div起个独有的`class`名，例如：在`bar`文件夹下添加`999.md`，则最外层的div的`class`为`bar999`，另外项目中已引入`less`

## 静态资源

- 静态资源存放再 `/docs/public` 目录下

- 图片存放在 `images` 目录下
  - Echarts 图表 橱窗页缩略图 存放在 `/docs/public/images/echarts/图表类型文件夹` 下，若无图表类型文件夹，则需新建
  - Highcharts 图表 橱窗页缩略图 存放在 `/docs/public/images/highcharts/图表类型文件夹` 下，若无图表类型文件夹，则需新建
  - 画图表中需要用到图片可存放在 `/docs/public/images/others` 下

## 启动

npm run serve

## 打包

npm build

## 打包后的包名

- 打包后的包存放在 `/docs/.vuepress/dist`
- 包名需修改为 `...` 发布

## GitHub Pages自动部署
npm run deploy

## 手动部署

待补充



