---
# aside: false
---

# Object 对象类型

对象类型 是 js 语言堆内存中的唯一类型，有别于栈内存中基本类型的讲述方式（静态属性和方法、原型属性和方法、实例属性和方法），此处打散后串讲会更加清晰。

## 实例的创建

```js
Object.prototype.constructor(any); // any表示任何类型的数值，构造出对应类型的对象实例
Object(any); // window.Object === Object.prototype.constructor,返回包装对象
new Object(any); // 同上
let object = {...}; // 字面量
```

::: details

::: code-group
<<< @/../demos/lib/js/Object/proto/constructor.js [constructor]
<<< @/../demos/lib/js/Object/instance.js [instance]
:::

## 实例的状态

所谓实例的状态即属性表的操作权限。
状态只能从上往下的顺序变化！

<!-- prettier-ignore -->
| status | 状态 | 增加字段 | 删除字段 | 修改字段 | 修改值 | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| extensible | 可扩展状态 | **yes** | **yes** | **yes** | **yes** | 字面量声明时的实例的默认状态<br/> ` [[Extensible]] === true` `descriptor.configurable === true ` `descriptor.writable === true` |
| non-extensible | 不可扩展状态 | no | **yes** | **yes** | **yes** | `[[Extensible]] === false` `descriptor.configurable === true` `descriptor.writable === true` |
| sealed | 封存态 | no | no | no | **yes** | `[[Extensible]] === false` `descriptor.configurable === false` `descriptor.writable === true` |
| frozen | 冻结态 | no | no | no | no | `[[Extensible]] === false` `descriptor.configurable === false` `descriptor.writable === false` |

修改实例的状态

<!-- @include: ../emoji.md -->
<!--@include: ./table.md -->

## 属性的状态

定义实例属性的内容和状态，使用 属性描述符相关方法

<!--@include: ./record.md -->

## 其他方法

<!--@include: ./prop.md -->

## Reference

[MDN-object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

[常见数据结构](/lib/js/data-structure.md)
