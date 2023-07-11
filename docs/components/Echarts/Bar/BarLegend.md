# 柱状图 - 图例


## 图例(Legend)
::: demo 
```html
<template>
  <div class="wrap">
    <!-- <div class="chart-operation"></div> -->
    <div id="main" class="chart-bar"></div>
  </div>
</template>

<script>
  const echarts = require('echarts');
  export default {
    data() {
      return {
        myChart:null,
        options:{
          legend: {
            // 朝向 vertical // 垂直显示 或者  horizontal // 水平显示
            orient: 'horizontal',
            // 图例在X轴方向上的位置 left
            x:'center',
            // 在Y轴方向上的位置 top
            y:'top'
          },
          grid: {
            top: '5%',
            right: '5%',
            left: "10%",
            bottom: '10%'
          },
          xAxis: [{
            type: 'category',
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
          }],
          yAxis: [{
            type:'value'
          }],
          series: [{
            name: '2011',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: '2012',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }],
        }
      }
    },
    mounted(){
      this.myEcharts()
    },
    methods:{
      /* 初始化echarts图标 */
      myEcharts(){
        this.myChart = this.$echarts.init(document.getElementById('main'));
        console.log('this.options',this.options)
        this.myChart.setOption(this.options)
      }
    }
  }
</script>
<style>
.chart-bar{
  width:100%;
  height:400px;
}
.chart-operation{
  margin-bottom:20px;
}
</style>
```
:::

## 图例样式(Legend)
|属性|说明|类型|
|----|----|---|
|backgroundColor|背景颜色|
|borderColor|边框颜色|
|borderWidth|边框宽度|Number|
|padding|内边距|Number|
|itemGap|图例每项之间的距离|Number|
注意：边框宽度和内边距属性值为数值，不加单位。
::: demo 
```html
<template>
  <div class="wrap">
    <!-- <div class="chart-operation"></div> -->
    <div id="main-2" class="chart-bar"></div>
  </div>
</template>

<script>
  const echarts = require('echarts');
  export default {
    data() {
      return {
        myChart:null,
        options:{
          legend: {
            // 朝向 vertical // 垂直显示 或者  horizontal // 水平显示
            orient: 'horizontal',
            // 图例在X轴方向上的位置 left
            x:'center',
            // 在Y轴方向上的位置 top
            y:'top',
            // 背景颜色
            backgroundColor: '#fac858',
            // 边框颜色
            borderColor: '#5470c6',
            // 边框宽度
            borderWidth: '2',
            // 控制每一项的间距，也就是图例之间的距离属性值为数值，不带单位
            itemGap:100,
            // 内边距 顺序>上右下左
            padding: [5,10,5,10],
          },
          grid: {
            top: '5%',
            right: '5%',
            left: "10%",
            bottom: '10%'
          },
          xAxis: [{
            type: 'category',
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
          }],
          yAxis: [{
            type:'value'
          }],
          series: [{
            name: '2011',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: '2012',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }],
        }
      }
    },
    mounted(){
      this.myEcharts()
    },
    methods:{
      /* 初始化echarts图标 */
      myEcharts(){
        this.myChart = this.$echarts.init(document.getElementById('main-2'));
        console.log('this.options',this.options)
        this.myChart.setOption(this.options)
      }
    }
  }
</script>
<style>
.chart-bar{
  width:100%;
  height:400px;
}
.chart-operation{
  margin-bottom:20px;
}
</style>
```
:::