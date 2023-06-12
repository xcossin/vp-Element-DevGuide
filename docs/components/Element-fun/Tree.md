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

## 可选择二级Tree的子节点选中状态

适用于需要选择层级时使用。获取二级节点的选中状态

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
        // 
        defaultProps: {
          // 指定子树为节点对象的某个属性值
          children: 'data',
          // 指定节点标签为节点对象的某个属性值
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
      // 当复选框被点击的时候触发
      // 共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性
      checkChange (data, checked) {
        console.log('data',data)
        console.log('checked',checked)
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

::: details 点击查看案例数据
```js
[
  {
    "id": 1,
    "information": "点位",
    "data": [
      {
        "id": 14,
        "information": "公交车",
        "judge": 0
      },
      {
        "id": 13,
        "information": "监控",
        "judge": 0
      },
      {
        "id": 12,
        "information": "停车场",
        "judge": 0
      },
      {
        "id": 11,
        "information": "卡口",
        "judge": 0
      },
      {
        "id": 10,
        "information": "信号机",
        "judge": 0
      }
    ]
  },
  {
    "id": 2,
    "information": "警力",
    "data": [
      {
        "id": 24,
        "information": "对讲机",
        "judge": 1
      },
      {
        "id": 23,
        "information": "岗位",
        "judge": 0
      },
      {
        "id": 22,
        "information": "铁骑",
        "judge": 1
      },
      {
        "id": 21,
        "information": "警车",
        "judge": 1
      },
      {
        "id": 20,
        "information": "警员",
        "judge": 1
      }
    ]
  },
  {
    "id": 3,
    "information": "路况",
    "data": [
      {
        "id": 30,
        "information": "路况",
        "judge": 0
      }
    ]
  },
  {
    "id": 4,
    "information": "层级",
    "data": [
      {
        "id": 40,
        "information": "卫星地图",
        "judge": 0
      }
    ]
  },
  {
    "id": 5,
    "information": "预警",
    "data": [
      {
        "id": 52,
        "information": "预警",
        "judge": 0
      },
      {
        "id": 51,
        "information": "拥堵",
        "judge": 0
      },
      {
        "id": 50,
        "information": "事故",
        "judge": 0
      }
    ]
  }
]
```
:::