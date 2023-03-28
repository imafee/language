# Overview - Object Interface

面对原生接口众多、历史包袱沉重的问题，不利于学习和归纳，因此进行接口的封装练习。
在实现中考虑做成immutable,进一步减轻心智负担。

引入依赖

```js
import { 
  // 对象
  create,setObject,getObject,  // 自身
  isObject // 判断状态
  // 对象的属性
  setProperty,getProperty, // 自身
  setPrototype,getPrototype // 原型
  getPrototypeProperty, // 原型链上的所有属性
  isProperty // 判断状态
 } from "library/object";
```

注：列表的父项表示封装后的接口，子项表示被封装的接口或实现细节。

## 对象接口

原生只提供了对象属性的descriptor，却没有提供对象实例的descriptor，所以这里统一一下

- [原生] create(proto,Descriptors) // 创造对象自身属性和原型属性
- setObject(obj,Descriptor) 定义对象的权限（增加或者修改）
  - [原生] freeze(obj)
  - [原生] seal(obj)
  - [原生] preventExtensions(obj)
- getObject(obj) // 读取对象的状态`Descriptors数据结构`（不含对象的属性）
- isObject(obj) // frozen/sealed/extensible
  - [原生] isFrozen
  - [原生] isSealed
  - [原生] isExtensible

## 属性接口

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
- setPrototype(obj,newProto)
  - [原生] setPrototypeOf(obj,newProto) // Object，修改原型对象
- getPrototype(obj)
  - [原生] getPrototypeOf(obj) // Object，读取原型对象
- isProperty(obj,prop,permission) // 读取权限,writable/enumerable/configurable
  - isWritable(obj,prop) // 可写权限
  - isEnumerable(obj,prop) // 可枚举权限
  - isConfigurable(obj,prop) // 可删除权限

## 其他接口

使用Object的原生方法，这里不做封装

- [原生] prototype.constructor(arg) // 构造函数，通常使用Object()或new Object()来实例化
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
