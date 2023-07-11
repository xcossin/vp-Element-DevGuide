# js数据处理

## 1.数组去重

```js
```

## 2.数组排序

```js
```

## 3.获取多个数组交集

```js
let fontSizeArr = [[1,2,3],[2,3,4],[3,4,5]]
let filterArr = fontSizeArr.reduce((prev, curr) => {
    return prev.filter(value => curr.includes(value))
})
// filterArr = [3]
```

## 4.生成数组
方案1
```js
const createArr = (n) => Array.from(new Array(n), (v, i) => i)
const arr = createArr(100) // 0 - 99 数组
```
方案2
```js
const createArr = (n) => new Array(n).fill(0).map((v, i) => i)
createArr(100) // 0 - 99数组
```