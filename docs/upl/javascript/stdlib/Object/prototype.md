---
aside: false
---

# Object.prototype.`Property`

Object对象的原型属性

## interface

> 注意：图标:boom:表示接口有副作用

Property | Definition | Description
 :--- | :--- | ---
constructor | 详见 [Object构造函数](./constructor.md) | 构造函数属性<br/>传入原始类型值，生成对象类型实例（原始类型对应的对象类型）<br/>Object.prototype.constructor === Object
toString() |@return \{String} |转为字符串表示<br/>查看是何种对象类型，形式为[object typename]
valueOf() |@return \{any} <br/>取决于inst是何种类型 | 查询实例的原始值primitive
~~toLocaleString~~|@return \{String}|已废除<br/>应该使用实例自身的方法
hasOwnProperty(prop)| @param {String\|Symbol} prop 属性名<br/>@return \{Boolean\}|自身属性中是否有该属性名<br/>支持 Symbol
isPrototypeOf(obj) | @param {Object} obj 参考对象<br/>@return \{Boolean\} | 是否在参数对象的原型链上
propertyIsEnumerable(prop) |@param {String} prop 属性名<br/>@return \{Boolean\} |属性是否可枚举<br/>该实例的 prop 属性是否可枚举(即 属性描述符的descriptor.enumerable 的值)

::: details Click to view demo
::: code-group
<<< @/../demos/javascript/stdlib/Object/prototype.constructor.js
:::
