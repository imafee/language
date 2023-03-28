---
aside: false
---

# Object.`Property`

Object Static properties ,Object的静态属性

## interface

> 注意：图标:boom:表示接口有副作用

Property | Definition | Description
--- | --- | ---
freeze(obj) :boom: | @param {Object} obj 操作对象（被改变）<br/>@return \{Object\} |冻结对象，无法复原。<br/>冻结状态即无法增、删、改自身属性（含 prototype 属性），且属性描述符属性 writable、configurable 均置为 false。
seal(obj) :boom: | @param {Object} obj 操作对象（被改变）<br/>@return \{Object\}  |固化对象,无法复原。<br/>被固化对象即无法增、删自身属性（含 prototype 属性），且所有属性的属性描述符 configurable 置为 false。
preventExtensions(obj) :boom: | @param {Object} obj 操作对象（被改变）<br/>@return \{Object\} |阻止扩展对象的属性。<br/>即无法增加自身属性（prototype 属性不受影响）
isFrozen(obj) | @param {Object} obj<br/>@return \{Boolean\}  | 对象是否为冻结态<br/>被施加过 freeze 方法
isSealed(obj) | @param {Object} obj<br/>@return \{Boolean\} |对象是否处于固化态。<br/>被施加过 seal 方法
isExtensible(obj) |@param {Object} obj<br/>@return \{Boolean\}|对象是否为可扩展态。被施加过 preventExtensions 方法
assign(target,...sources) :boom: | @param \{Object\} target 操作对象（被改变）<br/>@param \{Object Array\} sources 参考对象列表 <br/>@return \{Object\} target对象|属性的批量分配。<br/>从sources中按顺序取source，将source上的自身属性（属性可枚举）分配（浅拷贝）给 target对象。
create(proto[,descriptors]) | @param {Object} proto 原型参考对象<br/>@param {Descriptores} descriptors 属性描述符集<br/>@return \{Object\} | 创造个对象。<br/>描述原型（也可以置为null），描述自身属性。
defineProperty(obj, prop, descriptor) :boom: |@param {Object} obj 操作对象（被改变） <br/>@param {String\|Symbol} prop 要定义或修改的属性名<br/>@param {Descriptor} descriptor 属性描述符<br/>@return \{Object\} |定义属性，通过属性描述符
defineProperties(obj, descriptors) :boom: |@param {Object} obj 操作对象（被改变） <br/> @param {Descriptors} descriptors 属性描述符集<br/>@return \{Object\} | 定义属性集，通过属性描述符集
getOwnPropertyDescriptor(obj,prop) | @param {Object} obj 查询对象 <br/> @param {String\|Symbol} prop 属性名 <br/>@return \{Descriptor\}  | 读取自身属性描述符。<br/> 即获得obj.prop的属性描述符，支持 String 和 Symbol 类型
getOwnPropertyDescriptors(obj) | @param {Object} obj 查询对象 <br/> @return \{Descriptors\}  | 读取自身属性描述符集。
getOwnPropertyNames(obj) | @param {Object} obj 查询对象<br/> @return \{String Array\} |读取自身 String 类型属性名数组。<br/>包含不可枚举属性<br/>不支持 Symbol 类型属性
getOwnPropertySymbols(obj) | @param {Object} obj 查询对象<br/> @return \{String Array\} |读取自身 Symbol 类型属性名数组。<br/>包含不可枚举属性<br/>不支持 String 类型属性
keys(obj) |@param {Object} obj<br/>@return \{(String\|Symbol) Array\}|键名集合。<br/>对象自身的可枚举属性名
values(obj) |@param {Object} obj<br/>@return \{any Array\}|键值集合。<br/>对象自身的可枚举属性的值
setPrototypeOf(obj,newProto) :boom: | @param {Object} obj 操作对象（被改变）<br/>@param {Object} newProto 原型对象<br/> @return \{Object\} 原型对象 |修改原型
getPrototypeOf(obj) | @param {Object} obj 查询对象<br/>@return \{Object\} 原型对象| 读取原型对象
entries(obj) |@param {Object} obj 查询对象<br/>@return \{Object Array\}|条目。<br/>返回对象自身可枚举属性的键值对列表
fromEntries(entries) |@param {entries} 键值对列表<br/>@return \{Object\}|条目对象。<br/>把键值对列表转换为一个对象
hasOwn(obj,prop) | @param {Object} obj<br/>@return \{any Array\} | 用于取代Object.prototype.hasOwnProperty
is(value1,value2) |@param {Object} value1<br/>@param {Object} value2<br/>@return \{Boolean\}|是否严格相等(严格一词是相较于==和===)

::: details Click to view demo
::: code-group
<<< @/../demos/javascript/stdlib/Object/defineProperty.js [defineProperty]
<<< @/../demos/javascript/stdlib/Object/defineProperties.js [defineProperties]
<<< @/../demos/javascript/stdlib/Object/getOwnProperty_.js [getOwnProperty*]
:::
