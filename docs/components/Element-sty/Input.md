# Input 输入框

通过鼠标或键盘输入字符

## 基础用法

::: demo
```Vue
<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::
