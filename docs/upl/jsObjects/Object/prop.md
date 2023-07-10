<!-- prettier-ignore -->
ecma| api | describe | note 
--- | :--- | :--- | :---
6|Object.**assign**(target[,...sources]) <br>:boom: :musical_keyboard: | 分配属性，自身可枚举 | sources自右向左读取
2017|Object.**keys**(obj) | 键名数组 | 键名是Symbol类型的、不可枚举类型的不返回
2017|Object.**values**(obj) | 键值数组 | 同上
2017|Object.**entries**(obj) | 转换为entries数据结构 | 键名是Symbol类型的不返回
2017|Object.**fromEntries**(obj) | 转换entries为object数据结构 | 支持Symbol类型的值
6|Object.**setPrototypeOf**(obj,proto) :boom: | 设置内部的原型链属性[[Prototype]] | 因为性能问题不推荐，推荐使用 create 来创建对象
6|Object.**getPrototypeOf**(obj)| 查找原型 |
6|Object.prototype.**isPrototypeOf**(obj,proto)| 判断原型
6|Object.**hasOwn**(obj,propName) | 自身属性中有没有 |
6|Object.**is**(value1,value2) | 两个栈值是否相同 | 与===的区别：前者将0、-0视为相同，将NaN与NaN视为不相同
6|Object.**getOwnPropertySymbols**(obj) <br>:musical_keyboard: | 获取自身属性（Symbol类型）数组 |
5|Object.**getOwnPropertyNames**(obj)  | 获取自身属性（String类型）数组|
3|~~Object.prototype.hasOwnProperty()~~|| 已废除,推荐使用`Object.hasOwn`
1|Object.prototype.**toLocaleString**() | 对象的本地化字符串表示(待整理)| 参考[国际化](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
1|Object.prototype.**toString**() | 对象类型的字符串表示(待整理) | Object.prototype.toString.call(any) // '[object 类型]'
1|Object.prototype.**valueOf**() | 将原始值转化为对应类型的对象 | obj.valueOf()===obj;<br>Object.prototype.valueOf.call('') instanceof String;

::: details
::: code-group
<<< @/../demos/javascript/buildinObjects/Object/static/assign.js [assign]
<<< @/../demos/javascript/buildinObjects/Object/static/keys.js [keys]
<<< @/../demos/javascript/buildinObjects/Object/static/entries.js [entries]
<<< @/../demos/javascript/buildinObjects/Object/static/hasOwn.js [hasOwn]
<<< @/../demos/javascript/buildinObjects/Object/proto/toString.js [toString]
<<< @/../demos/javascript/buildinObjects/Object/proto/valueOf.js [valueOf]
:::
