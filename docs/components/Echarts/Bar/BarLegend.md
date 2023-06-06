# 柱状图 - 图例

<!-- ```

``` -->
## 图例(Legend)
::: demo 
```html
<template>
  <div class="wrap">
    <div class="chart-operation">
      <el-button type="primary" @click="showAxisLineShow('X')">X轴线</el-button>
      <el-button type="primary" @click="showAxisLineShow('Y')">Y轴线</el-button>
      <el-button type="success" @click="showSplitLine('X')">X轴网格线</el-button>
      <el-button type="success" @click="showSplitLine('Y')">Y轴网格线</el-button>
      <el-button type="info" @click="showTick('X')">X轴刻度线</el-button>
      <el-button type="info" @click="showTick('Y')">Y轴刻度线</el-button>
    </div>
    <div id="main" class="chart-bar"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          // 背景颜色
          backgroundColor: '#061C4C',
          title: {
            text: 'ECharts 入门示例 - 坐标轴'
          },
          tooltip: {},
          legend: {
            data:['销量']
          },
          xAxis: {
            // 控制 X 轴线是否显示
            axisLine: {
              show:true,
            },
            // 控制 X 轴刻度是否显示
            axisTick: {
              show: false
            },
            splitLine: {
              // 控制与X轴相交轴线显示
              show: false,

            },
            // 网格线斑马纹
            splitArea: {
              show: true,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(250,250,250,0.0)']
              }
            },
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {
            // 控制 Y 轴线是否显示
            axisLine: {
              show:true,
            },
            // 控制 Y 轴刻度是否显示
            axisTick: {
              show: false
            },
            splitLine: {
              // 控制与Y轴相交轴线显示
              show: false,
            }
          },
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        },
        myChart:null
      }
    },
    created(){

    },
    mounted(){
      this.myEcharts()
    },
    methods:{
      /* 初始化echarts图标 */
      myEcharts(){
        this.myChart = this.$echarts.init(document.getElementById('main'));
        this.myChart.setOption(this.options)
      },
      /* 控制X轴和Y轴的网格线显示 */
      showSplitLine(axisType){
        if(axisType === 'X'){
          this.options.xAxis.splitLine.show = !this.options.xAxis.splitLine.show
          this.setOptions()
        }else{
          this.options.yAxis.splitLine.show = !this.options.yAxis.splitLine.show
          this.setOptions()
        }
      },
      /* 控制X轴和Y轴的轴线显示 */
      showAxisLineShow(axisType){
        if(axisType === 'X'){
          this.options.xAxis.axisLine.show = !this.options.xAxis.axisLine.show
          this.setOptions()
        }else{
          this.options.yAxis.axisLine.show = !this.options.yAxis.axisLine.show
          this.setOptions()
        }
      },
      /* 控制X轴和Y轴的刻度线显示 */
      showTick(axisType){
        if(axisType === 'X'){
          this.options.xAxis.axisTick.show = !this.options.xAxis.axisTick.show
          this.setOptions()
        }else{
          this.options.yAxis.axisTick.show = !this.options.yAxis.axisTick.show
          this.setOptions()
        }
      },
      // 统一设置options
      setOptions(){
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

## 图例(Legend)
## 系列(Series)
## 悬浮窗(Tooltip)
## 工具箱(ToolBox)