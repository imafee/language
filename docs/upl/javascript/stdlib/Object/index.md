# Overview - Object Interface

这里对原生接口进行封装，目的是归类和缩减接口数量，达到减少学习心智的目的

```js
import { 
  // 对象的操作
  create,set,get,
  isFrozen,isSealed,isExtensible, // 判断
  // 对象属性的操作
  setProperty,getProperty,getPrototypeProperty, // 对象自身属性
  setPrototypeOf,getPrototypeOf, // 对象原型
  isWritable,isEnumerable,isConfigurable // 判断
 } from "library/object";
```

## 对象的操作

原生只提供了对象属性的descriptor，却没有提供对象实例的descriptor，所以这里统一一下

- [原生] create(proto,Descriptors) // 创造对象自身属性和原型属性
- set(obj,Descriptor) 定义对象的权限
  - [原生] freeze(obj)
  - [原生] seal(obj)
  - [原生] preventExtensions(obj)
- get(obj) // 返回对象的`Descriptors数据结构`（不包含对象的属性）
- [原生] isFrozen
- [原生] isSealed
- [原生] isExtensible

## 属性的操作

统一单复数形式,减轻历史债务

- setProperty(obj,descriptors,proto) // 定义对象属性的值和权限
  - [原生] defineProperty(obj,Descriptor)
  - [原生] defineProperties(obj,Descriptors)
- getProperty(obj[,prop]) // 读取自身属性集，`Descriptors数据结构`
  - [原生] getOwnPropertyDescriptor(obj,prop)
  - [原生] getOwnPropertyDescriptors(obj)
  - [原生] getOwnPropertyDescriptors(obj)
  - [原生] getOwnPropertyNames(obj)
  - [原生] getOwnPropertySymbols(obj)
  - [原生] keys(obj)
  - [原生] values(obj)
- getPrototypeProperty(obj[,prop]) // 读取原型链上属性集，`Descriptors数据结构`
- [原生] setPrototypeOf(obj,newProto) // Object，修改原型对象
- [原生] getPrototypeOf(obj) // Object，读取原型对象
- isWritable(obj,prop) // 可写权限
- isEnumerable(obj,prop) // 可枚举权限
- isConfigurable(obj,prop) // 可删除权限

## 其他操作

请使用Object的原生方法，这里不做封装

- [原生] prototype.constructor(arg) // 构造函数
- [原生] assign(obj,...sources) // Object,批量复制属性
- [原生] entries(obj) // 对象转换为条目
- [原生] fromEntries(entries) // 条目转换为对象
- [原生] hasOwn(obj,prop) // 判断自身属性
  - [原生] ~~hasOwnProperty~~
- [原生] is(value1,value2) // 判断相等
- [原生] prototype.toString()
- [原生] prototype.valueOf()
- [原生] prototype.isPrototypeOf(refObj)
- [原生] prototype.propertyIsEnumerable
