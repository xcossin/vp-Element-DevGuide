# 柱状图 - 坐标轴相关

通过配置xAxis和yAxis可实现内容  
> -  <font size="2">坐标轴箭头的样式，颜色，风格</font>
> -  <font size="2">网格线颜色，样式</font>
> -  <font size="2">网格区域样式</font>
> -  <font size="2">坐标轴刻度的颜色，指向</font>
> -  <font size="2">坐标轴刻度文字数据的颜色，旋转角度，颜色，风格，字体，粗细，大小</font>
> -  <font size="2">坐标轴名称颜色，风格，边距，偏移</font>

x轴y轴在echarts配置项里，从内容上来说大体没有太大区别，x轴能用的配置项y轴基本也可以用。

### X轴
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
          // X轴
          xAxis: {
            show: true, // 是否显示 x 轴
            type: 'category', // 默认 category类目轴 坐标轴类型(可选 value   category   time   log)
            name: 'x轴',//坐标轴名称
            nameLocation: 'end', //坐标轴名称显示位置 可选 start、center、end(默认)
            //坐标轴名称的文字样式
            nameTextStyle: { 
              color: '#fff', //坐标轴名称的颜色
              fontSize:12, //坐标轴名称的大小(用数字表示)
              fontWeight:'bold', //坐标轴文字加粗程度(可选 bold、bolder、lighter、normal)
              fontstyle:'normal', //坐标轴文字样式(可选 normal、italic、oblique)
              fontFamily:'楷体', //坐标轴文字风格 (可选 楷体、宋体、华文行楷等等)
              padding: [0, 0, 0, 20]//坐标轴文字边距(上右下左)
              // nameLocation为center时设置上才有效
            },
            nameGap: 0,//坐标轴名称与轴线之间的距离        (用数字表示)
            nameRotate: 0,//坐标轴名字旋转的角度值
            inverse:false, //是否为反向坐标轴
            // X轴线样式
            axisLine: { 
              show: true, // 控制X轴轴线是否显示
              // 坐标轴箭头符号样式 (可选:'none'无箭头、'arrow'标准箭头、'triangle'三角形箭头)
              // 可搭配成双向['triangle','arrow'] 或 单项 ['none','arrow']
              symbol: ['none', 'none'], 
              symbolSize: [8, 8], // 箭头大小  ([宽度,高度])
              symbolOffset: [0, 7], //箭头偏移
              lineStyle: {  // 坐标轴线样式
                color: 'green', //线 的颜色
                width: 1, // 线的粗细程度 (用数字表示)
                type: 'solid', // 线的类型 (可选solid  dotted  dashed)
                opacity: 1 // 线的透明度 (用0~1的小数表示)
              }
            },
            // X轴刻度设置
            axisTick: {
              show: true,//是否显示坐标轴刻度
              inside: false,//坐标轴刻度指向 (true表示朝内   false表示朝外)
              alignWithLabel:false, 
              // 刻度线是否和标签对齐 和标签对齐指的是标签在两个刻度中间 
              length: 5,// 坐标轴刻度长度
              lineStyle: {//坐标轴刻度的样式
                color: '#7ec050',//坐标轴刻度的颜色
                width: 2,//坐标轴刻度的粗细程度(用数字表示)
                type: 'solid'//坐标轴刻度的类型(可选solid  dotted  dashed)
              }
            },
            //坐标轴刻度文字的设置
            axisLabel: {
              show: true,  //是否显示
              inside: false,//坐标轴刻度文字指向 (true表示朝内   false表示朝外)
              rotate: 0,  //坐标轴刻度文字的旋转角度
              margin: 10,  //坐标轴刻度文字与轴线之间的距离
              padding: [5, 0, 2, -5],//坐标轴刻度文字的边距(上右下左)
              textStyle: {
                color: '#9BC7CC',
                // fontFamily: 'DIN',
                fontstyle:'normal', //坐标轴刻度文字的样式(可选normal  italic   oblique)
                // fontFamily:'宋体', //坐标轴刻度文字的风格 (可选楷体  宋体  华文行楷等等)
                fontSize:12, //坐标轴刻度文字的大小  (用数字表示)
                // fontWeight:'lighter', 
                // 坐标轴刻度文字的加粗程度 (可选bold、bolder、lighter、normal或者500等数字)
              }          
            },
            // 控制与X轴相交轴线显示
            splitLine: {
              show: false,
              lineStyle: {
                width:2,//网格线的加粗程度
                type: 'dotted', // dotted 虚线  solid 实线
                color: '#D7D7D7', // 网格线颜色
              }
            },
            // 网格线斑马纹
            splitArea: {
              show: true,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(250,250,250,0.0)']
              }
            },
            // 坐标轴文字数据
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          // Y轴
          yAxis: {
            show: true,
            type: 'value',
            // Y轴name 也可做单位
            // 轴线颜色配置
            axisLabel: {
              textStyle: {
                color: '#9BC7CC',
                fontSize: 12,
                fontWeight: 400,
              }
            },
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
              lineStyle: {
                type: 'solid', // dotted 虚线  solid 实线
                color: '#D7D7' // 网格线颜色
              }
            },
          },
          series: [{
            name: '销量',
            type: 'bar',
            showBackground: true, // 是否显示柱子的背景
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

### Y轴
::: demo 
```html
<template>
  <div class="wrap">
    <div class="chart-operation">
      <el-button type="primary" @click="showAxisLineShow('Y')">Y轴线</el-button>
      <el-button type="success" @click="showSplitLine('Y')">Y轴网格线</el-button>
      <el-button type="info" @click="turnY('Y')">Y轴翻转</el-button>
      <el-button type="info" @click="turnYName('Y')">Y轴name翻转45度</el-button>
    </div>
    <div id="main-y" class="chart-bar"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          // 背景颜色
          backgroundColor: '#061C4C',
          // X轴
          xAxis: {
            show: true, // 是否显示 x 轴
            type: 'category',
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          // Y轴
          yAxis: {
            type: 'value',
            name: '(柱)',//坐标轴名称
            nameLocation: 'end', //坐标轴名称显示位置 可选 start、center、end(默认)
            //坐标轴名称的文字样式
            nameTextStyle: { 
              color: '#9BC7CC', //坐标轴名称的颜色
              fontSize:12, //坐标轴名称的大小(用数字表示)
              fontWeight:'bold', //坐标轴文字加粗程度(可选 bold、bolder、lighter、normal)
              fontstyle:'normal', //坐标轴文字样式(可选 normal、italic、oblique)
              // fontFamily:'楷体', //坐标轴文字风格 (可选 楷体、宋体、华文行楷等等)
              padding: [0, 0, 0, 0]//坐标轴文字边距(上右下左)
              // nameLocation为center时设置上才有效
            },
            nameGap: 0,//坐标轴名称与轴线之间的距离        (用数字表示)
            nameRotate: 0,//坐标轴名字旋转的角度值
            inverse:false, //是否为反向坐标轴 false不翻转  true 翻转
            // boundaryGap: ['20%', '20%'], 
            // 非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效。
            // 轴线颜色配置
            axisLabel: {
              textStyle: {
                color: '#9BC7CC',
                fontSize: 12,
                fontWeight: 400,
                fontFamily: 'D-DIN-PRO-500',
                // align: 'right',
                // 字间距
                // lineHeight: 14
              }
            },
            // 控制 Y 轴线是否显示
            axisLine: {
              show:true,
              symbol:['none', 'arrow'],//加箭头处
			        symbolOffset: 30,//使箭头偏移
              lineStyle: {
                // color: "black",         //设置y轴的颜色
                // shadowOffsetY:-30,      //利用阴影进行反向延长
                // shadowColor: 'black',   //设置阴影的颜色
              },
            },
            // 控制 Y 轴刻度是否显示
            axisTick: {
              show: true,//是否显示坐标轴刻度
              inside: false,//坐标轴刻度指向 (true表示朝内，false表示朝外)
              length: 5,// 坐标轴刻度长度
              lineStyle: {//坐标轴刻度的样式
                color: '#7ec050',//坐标轴刻度的颜色
                width: 2,//坐标轴刻度的粗细程度(用数字表示)
                type: 'solid'//坐标轴刻度的类型(可选solid  dotted  dashed)
              }
            },
            splitLine: {
              show: false,// 控制与Y轴相交轴线显示
              lineStyle: {
                width:3, // 网格点粗
                type: 'solid', // dotted 虚线  solid 实线
                color: '#D7D7' // 网格线颜色
              }
            },
            // 网格线斑马纹
            splitArea: {
              show: true,
              areaStyle: {
                // 斑马纹颜色 - 根据inverse设置从下往上的顺序
                color: ['rgba(250,250,250,0.05)', 'rgba(250,250,250,0.0)']
              }
            },
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
        this.myChart = this.$echarts.init(document.getElementById('main-y'));
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
      /* 控制Y轴翻转 */
      turnY(){
        console.log(this.options.yAxis.inverse)
        this.options.yAxis.inverse = !this.options.yAxis.inverse
        this.setOptions()
      },
      /* 控制Y轴Name翻转 */
      turnYName(){
        console.log(this.options.yAxis.nameRotate)
        if(this.options.yAxis.nameRotate) this.options.yAxis.nameRotate = 0
        else this.options.yAxis.nameRotate = 45
        this.setOptions()
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

