<!-- prettier-ignore -->
ecma| api | describe | note
--- | :--- | :--- | :---
5| Object.**create**(proto[,propDescriptors]) :musical_keyboard:| 创建实例的属性集，根据指定的原型对象和属性描述符集对象 |
5|Object.**defineProperty**(obj,propName,propDescriptor) :boom: :musical_keyboard:|定义单个属性，到对象实例上去|属性描述符
5|Object.**defineProperties**(obj,propDescriptors) :boom: :musical_keyboard:|定义属性集合，到对象实例上去|属性描述符集
5|Object.**getOwnPropertyDescriptor**(obj) :musical_keyboard: |查询对象的属性描述符|属性描述符
5|Object.**getOwnPropertyDescriptors**(obj) :musical_keyboard:|查询对象的属性描述符集|属性描述符集
1|Object.prototype.**propertyIsEnumerable**(propName) :musical_keyboard:|属性可枚举(自身的)|

::: details

属性描述符字段

`{value,writeable,enumerable,configurable}`

存取描述符字段

`{get,set,enumerable,configurable}`

验证

::: code-group
<<< @/../demos/lib/js/Object/static/create.js [create]
<<< @/../demos/lib/js/Object/static/defineProperty.js [defineProperty]
<<< @/../demos/lib/js/Object/static/defineProperties.js [defineProperties]
:::
