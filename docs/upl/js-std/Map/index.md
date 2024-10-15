---
# aside: false
---

# Map

Map(字典/映射)是 Object 数据类型的增强版本。

| 不同点\数据结构 | Object                                   | Map                  |
| --------------- | ---------------------------------------- | -------------------- |
| 键的类型        | String or Symbol                         | Any                  |
| 键的顺序        | 不固定。和添加顺序无关，与引擎实现有关。 | 固定。和添加顺序有关 |
| 迭代器          | 需要自己部署                             | 默认已经部署         |
| 迭代范围        | 整个原型链上的所有可枚举属性             | 自身可枚举属性       |
| 属性可控性      | 属性表的控制，访问器属性的控制           | 无                   |
| 易用性          | 难                                       | 易                   |

## 实例的创建

```js
new Map();
const map = new Map(iterator); // 见Entries数据结构
map.size; // 规模度量
```

::: details exercises
::: code-group
<<< @/../codes/js/std/Map/instance.test.js [instance]
:::

## 原型方法

<!-- prettier-ignore -->
ecma| api |describe |note |
--- | --- | --- | --- |
|2015|Map.prototype.get(key)|取值||
|2015|Map.prototype.set(key,value)|添加或修改一个属性||
|2015|Map.prototype.delete(key)|删除||
|2015|Map.prototype.clear()|删除所有||
|2015|Map.prototype.has(key)|是否存在||
|2015|Map.prototype.keys()|取键数组||
|2015|Map.prototype.values()|取值数组||
|2015|Map.prototype.entries()|返回迭代器对象||
|2015|Map.prototype.forEach((key,value,map)=>{})|遍历||
|2015|Map.prototype.\[Symbol.iterator]()|供for...of和展开语法使用||

::: details exercises
::: code-group
<<< @/../codes/js/std/Map/proto/iterator.test.js [[Symbol.iterator]]
:::
