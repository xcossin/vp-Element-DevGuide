# Button 按钮

常用的操作按钮。

## 基本用法

基础的按钮用法。

::: demo 适用广泛的基础单选
```html
<template>
  <div class="btn">
    <el-button>点击</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value: ''
      }
    }
  }
</script>
```
:::