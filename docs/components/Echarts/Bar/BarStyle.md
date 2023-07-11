# 柱状图 - 风格

<!-- ```

``` -->
## 风格(Style)
::: demo 
```html
<template>
  <div class="wrap">
    <div class="chart-operation">
      <!-- <el-button type="primary" @click="showAxisLineShow('X')">X轴线</el-button>
      <el-button type="primary" @click="showAxisLineShow('Y')">Y轴线</el-button>
      <el-button type="success" @click="showSplitLine('X')">X轴网格线</el-button>
      <el-button type="success" @click="showSplitLine('Y')">Y轴网格线</el-button>
      <el-button type="info" @click="showTick('X')">X轴刻度线</el-button>
      <el-button type="info" @click="showTick('Y')">Y轴刻度线</el-button> -->
    </div>
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
          // 背景颜色
          backgroundColor: '#061C4C',
          legend: {
            // 朝向 vertical // 垂直显示 或者  horizontal // 水平显示
            orient: 'vertical'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            backgroundColor: 'rgba(13, 41, 102, 0.8)',
            borderColor: 'transparent',
            textStyle: {
              color: '#fff',
              fontSize: 16,
              fontFamily: 'Noto Sans SC'
            },
          },
          grid: {
            top: '25%',
            right: '15%',
            left: "15%",
            bottom: '25%'
          },
          xAxis: [{
            // name: "月份",
            type: 'category',
            // data: ["一月","二月","三月","四月","五月"],
            axisLine: {
              lineStyle: {
                color: '#FFFFFF'
              }
            },
            axisLabel: {
                margin: 10,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 12
                },
            },
            axisTick: {
                show: false
            }
          }],
          yAxis: [{
            name: "单位:万套",
            // splitNumber:4,
            interval:25, 
            // rgba(230, 247, 255, 0.7)
            nameTextStyle:{
              color:'rgba(230, 247, 255, 0.7)',
              fontSize:12,
              fontFamily: 'Noto Sans SC',
            },
            axisLabel: {
              formatter: '{value}',
              textStyle:{
                color: '#e2e9ff',
                fontFamily: 'DIN',
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#FFFFFF'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: [5, 5],
                color: '#223464'
              }
            },
          }],
          series: [{
            name:'总数',
            type: 'bar',
            // data: [2000,1520,1850,3400,2756],
            barWidth: 20,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#0EECE4' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#058FE7' // 100% 处的颜色
                }], false),
                // shadowColor: 'rgba(0,160,221,1)',
                // shadowBlur: 4,
              }
            },
            label: {
              normal: {
                show: false
              }
          },
          data:[
            {name:'1月',value:90},
            {name:'2月',value:75},
            {name:'3月',value:45},
            {name:'4月',value:70},
            {name:'5月',value:52}]
          }],
        }
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
        console.log('this.options',this.options)
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