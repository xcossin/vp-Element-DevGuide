// 引入Element-UI库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 必须通过这种import * as一次性导入全部模块的方式引入echarts
import * as echarts from 'echarts';
// 注入版权信息
import copy from './common/copy'
// TODO:格式要微调

// 引入基础样式重置文件
import './styles/index.css'
// 使用异步函数也是可以的
export default async ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  Vue.use(ElementUI)
  Vue.prototype.$echarts = echarts
  // ...做一些其他的应用级别的优化
  if (typeof process === 'undefined') {
    // Vue.use(ElementUI)
  }
  try {
    document && (() => { //对document的判断是防止编译的时候报错
      copy()
    })()
  } catch (e) {
    console.error(e.message)
  }
}