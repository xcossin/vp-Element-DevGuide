// import * as echarts from 'echarts'
// import echarts from 'echarts'

// 为什么使用 require 引入echarts？
// 因为在vuePress的代码块插件中不支持import的语法，而此配置中使用了 new echarts 对象需要引入echarts，无法使用import语法，只能使用require导入js文件方式，但是在此js文件中直接使用import * as echarts from 'echarts'方式会导致报错：Cannot assign to read only property 'exports' of object '#<Object>'；而使用import echarts from 'echarts'报错信息为：Error in data(): "TypeError: Cannot read properties of undefined (reading 'graphic')"；故而采用require('echarts')方式导入echarts。

const echarts = require('echarts');

// tree列表数据
module.exports = {
    // 背景颜色
    backgroundColor: '#061C4C',
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