import { log } from "/utils/index.js";

{
  var symbol = Symbol(1);
  var obj = {
    name: "name",
    [symbol]: 111,
    get: function () {
      console.log("get");
    },
    set: function () {
      console.log("set");
    },
  };
  log(
    "case: 字面量定义时\n\
    1.属性描述符的默认值全都是true：configurable: true,enumerable:true,writable:true\n\
    2.getOwnPropertyDescriptors看得到get、set、symbol属性",
    Object.getOwnPropertyDescriptors(obj) // 看得到get、set、symbol
  );
  var symbol = Symbol();
  Object.defineProperties(obj, {
    name: {
      value: "name2", // 可以进行属性的覆写
    },
    age: {
      value: 18, // 使用属性描述符定义时的未定义属性（默认值）全false
    },
  });
  log(
    "case: 接口定义时\n\
    1.属性描述符的默认值全都是false：configurable: false,enumerable:false,writable:false\n\
    2.同一个对象可以进行多次defineProperties进行覆写",
    Object.getOwnPropertyDescriptors(obj)
  );
}
// 其他特性同Object.defineProperty
