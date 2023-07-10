<!-- prettier-ignore -->
ecma| api | describe | note
--- | :--- | :--- | :---
5| Object.**create**(proto[,propDescriptors]) :musical_keyboard:| 创建对象，根据指定的原型对象和属性描述符集 | `默认态`
5|Object.**defineProperty**(obj,propName,propDescriptor) :boom: :musical_keyboard:|定义属性|属性描述符
5|Object.**defineProperties**(obj,propDescriptors) :boom: :musical_keyboard:|定义属性|属性描述符集
5|Object.**getOwnPropertyDescriptor**(obj) :musical_keyboard: |查询自身属性描述符
5|Object.**getOwnPropertyDescriptors**(obj) :musical_keyboard:|查询自身属性描述符集
1|Object.prototype.**propertyIsEnumerable**(propName) :musical_keyboard:|属性是否为自身的、可枚举

::: details

属性描述符字段

`{value,writeable,enumerable,configurable}`

存取描述符字段

`{get,set,enumerable,configurable}`

验证

::: code-group
<<< @/../demos/javascript/buildinObjects/Object/static/create.js [create]
<<< @/../demos/javascript/buildinObjects/Object/static/defineProperty.js [defineProperty]
<<< @/../demos/javascript/buildinObjects/Object/static/defineProperties.js [defineProperties]
:::
