# Tree 树形控件

用清晰的层级结构展示信息，可展开或折叠。

## 基本用法

基础的树形结构展示。

::: demo
```html
<template>
  <div>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  }
</script>
```
:::

## 可选择

适用于需要选择层级时使用。
获取点击节点的选中事件

::: demo
```html
<template>
  <div class="tree-box">
    <el-tree
      class="tree"
      ref="tree"
      :data="layerList"
      show-checkbox
      node-key="id"
      :default-checked-keys="checkedKeys"
      :default-expand-all="true"
      :props="defaultProps"
      @check="checkChange">
    </el-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        testList:require('./testData/layer-data.js'),
        layerList:[],
        defaultProps: {
          children: 'data',
          label: 'information'
        },
        checkedKeys: []
      }
    },
    mounted(){
      // 设置测试数据
      this.layerList = this.testList
    },
    methods: {
      checkChange (data, checked, indeterminate) {
        console.log('data',data)
        const isCheck = this.$refs.tree.getCheckedNodes().indexOf(data) > -1
        console.log('isCheck 选中状态',isCheck)
        if (data.data) return
        console.log('二级单选')
      },
    }
  }
</script>
```
:::