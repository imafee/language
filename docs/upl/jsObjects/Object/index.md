---
# aside: false
---

# Object

<!--@include: ../emoji.md-->

[MDN:Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## 静态属性

`{
length:1,
name:"Object",
[[Prototype]]:{Function},
[[Scopes]]:{Array}
}`

## 构造函数

<!-- prettier-ignore -->
ecma | api | describe | note
--- | :--- | :--- | :---
1   | Object.prototype.constructor(any) | - | -

::: details

- 内存中创建 any 参数对应类型的实例
- 实例的内部原型链属性(\_\_proto\_\_)，指向该实例的类型对象的原型对象(Object.prototype)

::: code-group
<<< @/../demos/javascript/buildinObjects/Object/proto/constructor.js [constructor]
<<< @/../demos/javascript/buildinObjects/Object/instance.js [instance]
:::

## 实例的属性表

<!--@include: ./table.md -->

## 实例的属性定义（属性描述符）

<!--@include: ./record.md -->

## 实例的属性操作

<!--@include: ./prop.md -->
