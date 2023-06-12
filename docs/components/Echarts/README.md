# Echarts 模块说明

## 介绍
::: tip 提示 
本文由ChatGPT生成
:::


欢迎使用我们为 ECharts 准备的开发文档！这个文档的主要目的是为了帮助开发人员更好地理解和使用 ECharts 的 option 配置。option 是 ECharts 中最重要的配置项之一，它定义了图表的样式、数据、交互等方面的属性。

我们的文档将详细介绍 option 的各个方面，包括标题、坐标轴、图例、系列、工具箱等内容。每个部分都会提供具体的配置选项和示例代码，以便您快速上手。

无论您是初学者还是有一定经验的开发人员，我们相信这个开发文档都能为您提供清晰、详细的说明，帮助您快速上手使用 ECharts，定制出令人满意的图表。

我们会持续更新和完善这个开发文档，以确保与最新版本的 ECharts 保持一致。如果您在使用文档过程中有任何问题或建议，欢迎随时与我们交流。

祝您在使用 ECharts 开发出精美图表的过程中取得成功！

## 目录说明
Echarts案例模块初步计划先分为以下三个类型
1. 柱状图(Bar)
2. 折线图(Line)
3. 饼图(Pie)

而每个类型的配置将从以下7个方面进行说明
1. 标题(Title)
2. 坐标轴(Axis)
3. 图例(Legend)
4. 系列(Series)
5. 悬浮窗(Tooltip)
6. 工具箱(ToolBox)

___
::: demo 
```html
<template>
  <div class="wrap">
    <div id="main" class="module-chart " ></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          title: {
              text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
              data:['销量']
          },
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
        },
      }
    },
    created(){

    },
    mounted(){
      this.myEcharts()
    },
    methods:{
      // 初始化图标
      myEcharts(){
        let myChart = this.$echarts.init(document.getElementById('main'));
        myChart.setOption(this.options)
      }
    }
  }
</script>
<style>
.module-chart{
  width:100%;
  height:400px;
}
</style>
```
:::

## 特别说明
由于vuePress v1.x插件**vuepress-plugin-demo-container**生成的代码块中不支持import语法，所以在需要使用import语法的地方笔者最初考虑了两种方式
1. 将option配置放在js文件，import语法放在js文件进行，通过require导入该js文件。但是这条方案最大的问题就是js文件的内容无法在代码块中展示，该方案只考虑导入大批量测试数据时使用。
2. 在代码块中用require将import替代，解决了文件的内容无法在代码块中展示的问题，目前来看是支持导入echarts的，后续有问题再补充。