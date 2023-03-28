---
aside: false
---

# Object构造函数

Object.prototype.constructor(arg)

传入原始类型值，生成对象类型实例（原始类型对应的对象类型）（见[装箱](../../index.md#packing-and-unpacking)）。

语法：

```js
// 以下行为的结果相同
Object.prototype.constructor(arg); // !
new Object(arg); // new关键字写法
Object(arg); // 简单写法
```

参数说明:

1. 为对象时：不做任何处理，即将参数对象直接返回（inst === arg）
1. 为非对象时：生成一个原始类型值对应的对象实例
    - 为null、undefined或者不传参数，将生成空对象

---
::: details Click to view demos
::: code-group
<<< @/../demos/javascript/stdlib/Object/prototype.constructor.js [constructor]
:::
