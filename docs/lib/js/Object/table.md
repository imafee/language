<!-- prettier-ignore -->
ecma| api | describe | note
--- | :--- | :--- | :---
5| Object.**preventExtensions**(obj) :boom: | 阻止扩展，表不能再添加属性 | `不可扩展态`
5| Object.**seal**(obj) :boom: | 被封存，表记录不能删除和重新定义 | `封存态`
5| Object.**freeze**(obj) :boom: | 被冻结，表字段禁止写入 | `冻结态` 
5| Object.**isExtensible**(obj) | 查询表的状态,是不是`不可扩展态`。<br>判断条件：实例内部属性`[[Extensible]]===false` | 表状态与属性状态无关，是2个概念
5| Object.**isSealed**(obj) | 查询表的状态，是不是`封存态`。<br>判断条件：不可扩展态 && 所有记录（属性）的`configurable===false` | 从判断条件看，与属性表状态和属性状态有关 
5| Object.**isFrozen**(obj) | 查询表的状态，是不是`冻结态`。<br>判断条件：不可扩展态 && 封存态 && 所有记录（属性）的`writable===false` | 从判断条件看，与属性表状态和属性状态有关

::: details

1. 实例内部属性 `[[Extensible]]`，决定了属性表可否扩展（添加属性）
1. 属性描述符 `configurable`决定了该条表记录（属性）可否删除或者重新定义（删除和重新定义）
1. 属性描述符 `writable`决定了该条表记录（属性）可否写入
1. 默认情况下，以上三者均是 true

综上，实例的属性表状态如下：

- 默认态 `default`: `[[Extensible]]:true`,所有属性的 `configurable,writable` 要看定义时的值
- 不可扩展态 `non-extensible`:`[[Extensible]]:false`
- 封存态 `sealed`: `[[Extensible]]:false`,所有属性的 `configurable:false`
- 冻结态 `frozen`: `[[Extensible]]:false`,所有属性的 `configurable`,`writable`为 false

验证

::: code-group
<<< @/../demos/lib/js/Object/static/freeze.js [frozen]
:::
