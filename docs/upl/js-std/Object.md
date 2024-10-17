# Object

## 实例的创建

```js
let object = {}; // 字面量
new Object(any); // 面向对象的实例化方式。构造出any对应类型的对象实例，俗称装包
Object.prototype.constructor(any); // 函数式的实例化方式，调用返回。效果同上。
Object(any); // 同上。Object === Object.prototype.constructor
```

::: details exercises
::: code-group
<<< @/../codes/js/std/Object/instance.test.js [instance]
<<< @/../codes/js/std/Object/proto/constructor.test.js [constructor]
:::

## 实例的状态

属性表的可操作权限,简称为实例的状态

<!-- prettier-ignore -->
| 实例状态\属性表权限 | record add | record delete | field modify | value modify | 机制 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 可扩展状态(extensible,default) | yes | yes | yes | yes | `if( [[Extensible]] === true`&&   `descriptor.configurable === true`&&  `descriptor.writable === true )` |
 | 不可扩展状态   (non-extensible) | no | yes | yes | yes | `if( [[Extensible]] === false`&&  `descriptor.configurable === true`&&  `descriptor.writable === true )` |
| 封存态(sealed) | no | no | no | yes | `if( [[Extensible]] === false`&&   `descriptor.configurable === false`&&   `descriptor.writable === true )` |
| 冻结态(frozen) | no | no | no | no | `if( [[Extensible]] === false`&&  `descriptor.configurable === false`&&   `descriptor.writable === false )` |

说明:

1. `[[Extensible]]`为实例的内部属性，决定了其属性表可否扩展（添加属性）
1. 属性描述符的`configurable`决定了该属性可否删除或重新定义（删除和重新定义）
1. 属性描述符的`writable`决定了该属性可否写入
1. 由字面量或构造器实例化时，三者均是 true
1. 状态只能从上往下改变，不可逆！

改变实例状态的方法

<!-- prettier-ignore -->
ecma | api | 机制 | 状态
--- | :--- | :--- | :---
5| Object.preventExtensions(obj) [:boom:] | 属性表的可扩展关闭  `[[Extensible]] = false` | 不可扩展态
5| Object.seal(obj) [:boom:] | 属性表的可配置关闭  `descriptor.configurable = false` | 封存态
5| Object.freeze(obj) [:boom:] | 属性表的可写入关闭  `descriptor.writable = false` | 冻结态
5| Object.isExtensible(obj) | `if([[Extensible]] === true`| 是否为可扩展态
5| Object.isSealed(obj) | `if([[Extensible]] === false && descriptor.configurable === false`| 是否为封存态
5| Object.isFrozen(obj) | `if([[Extensible]] === false && descriptor.configurable === false && descriptor.writable === false` | 是否为冻结态

<!-- @include: ../tip.md -->

::: details exercises
::: code-group
<<< @/../codes/js/std/Object/static/freeze.test.js [freeze]
:::

## 属性描述符(集)

使用"属性描述符"数据结构，来创建实例(定义对象实例的属性)

<!-- prettier-ignore -->
ecma| api | describe |
--- | :--- | :--- | 
5|Object.create(proto[,propDescriptors]) [:musical_keyboard:]| 创建实例。根据指定的原型对象和属性描述符集 |
5|Object.defineProperty(obj,propName,propDescriptor) [:boom:,:musical_keyboard:]|定义单个属性，到对象实例上去|
5|Object.defineProperties(obj,propDescriptors) [:boom:,:musical_keyboard:]|定义属性集合，到对象实例上去|
5|Object.getOwnPropertyDescriptor(obj) [:musical_keyboard:,own] |查询对象的属性描述符|
5|Object.getOwnPropertyDescriptors(obj) [:musical_keyboard:,own]|查询对象的属性描述符集|
1|Object.prototype.propertyIsEnumerable(propName) [:musical_keyboard:]|属性可枚举(自身的)|

<!-- @include: ../tip.md -->

::: details exercises
::: code-group
<<< @/../codes/js/std/Object/static/defineProperty.test.js [defineProperty]
:::

## 方法

<!-- prettier-ignore -->
ecma| api |describe |note |
--- | --- | --- | --- |
2015|Object.**assign**(target[,...sources]) <br>[:boom:, :musical_keyboard:, own] | 分配sources属性给target对象|sources自右向左读取，属性为自身可枚举
2017|Object.**keys**(obj) [own] | 键名数组 | 不返回:键名是Symbol类型的、不可枚举类型的
2017|Object.**values**(obj) [own] | 键值数组 | 同上
2017|Object.**entries**(obj) [own]  | 转换object为entries数据结构 | 不返回：键名是Symbol类型的
2017|Object.**fromEntries**(obj) [:musical_keyboard:] | 转换entries为object数据结构 | 支持Symbol类型的值
2015|Object.**setPrototypeOf**(obj,proto) [:boom:] | 设置原型 | 本质是修改内部属性[[Prototype]]，因性能问题不推荐，推荐使用 create 来创建新对象
2015|Object.**getPrototypeOf**(obj) [own] | 查找原型 | 自身的原型对象，不会向上追溯
2015|Object.prototype.**isPrototypeOf**(obj,proto) | 判断原型 | 等同于 Object.prototype.getPrototypeOf(obj) === proto
2015|Object.**getOwnPropertySymbols**(obj) <br> [:musical_keyboard:, own] | 获取自身属性（Symbol类型）数组 | 仅仅返回键类型为Symbol的
5|Object.**getOwnPropertyNames**(obj) [own] | 获取自身属性（String类型）数组| 仅仅返回键类型为String的
3|~~Object.prototype.hasOwnProperty(obj,propName)~~|自身属性中有没有该属性| 已废除。推荐`Object.hasOwn`
2015|Object.**hasOwn**(obj,propName) [:musical_keyboard:, own] | 自身属性中有没有该属性 | 仅返回自身属性
2015|Object.**is**(value1,value2) | 两个栈值是否相同 | 与===的区别：前者将0、-0视为相同，将NaN与NaN视为不相同
1|Object.prototype.**toLocaleString**() | 对象的本地化字符串表示| 参考[国际化](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
1|Object.prototype.**toString**() | 对象类型的字符串表示| Object.prototype.toString.call(any) // 返回'[object 类型]'
1|Object.prototype.**valueOf**() | 将原始值转化为对应类型的对象/或者相反 | Object.prototype.valueOf.call(1) // number object

<!-- @include: ../tip.md -->

::: details exercises
::: code-group
<<< @/../codes/js/std/Object/static/assign.test.js [assign]
<<< @/../codes/js/std/Object/static/create.test.js [create]
<<< @/../codes/js/std/Object/static/entries.test.js [entries]
<<< @/../codes/js/std/Object/static/is.test.js [is]
:::
