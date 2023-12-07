---
# aside: false
---

# Object

由于本节的特殊性，以常规的静态属性(方法)、原型属性(方法)、实例属性(方法)的顺序没法说清楚，因此打散后串讲。

对象实例的 4 种状态对应的读写权限：(实质就是一张属性表的权限操作)

| status         | 增加字段 | 删除字段 | 修改字段 | 值的改动 | 备注         |
| -------------- | -------- | -------- | -------- | -------- | ------------ |
| default        | yes      | yes      | yes      | yes      | 默认状态     |
| non-extensible | no       | yes      | yes      | yes      | 不可扩展状态 |
| sealed         | no       | no       | no       | yes      | 封存态       |
| frozen         | no       | no       | no       | no       | 冻结态       |

状态只能从上往下变化，不能从下而上变化！

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## 实例化

```js
Object.prototype.constructor(any); // any表示任何类型的数值，构造出对应类型的对象实例
let object = {}; // 字面量
```

::: details

- 实例的内部原型链属性(\_\_proto\_\_)，指向该实例的类型对象的原型对象(Object.prototype)

::: code-group
<<< @/../demos/lib/js/Object/proto/constructor.js [constructor]
<<< @/../demos/lib/js/Object/instance.js [instance]
:::

## 实例的状态操作(增删改)

<!--@include: ./table.md -->

## 实例的属性描述符操作

<!--@include: ./record.md -->

## 实例的常规操作

<!--@include: ./prop.md -->

## Reference

[相关的数据结构](/lib/js/data-structure.md)
