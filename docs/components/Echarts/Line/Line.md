# 折线图


::: demo 
```html
<template>
  <div class="wrap">
    <div id="main" class="module-chart"></div>
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
