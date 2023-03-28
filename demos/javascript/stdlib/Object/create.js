import { log } from "/utils/index.js";

{
  log(
    "使用：创建自身属性",
    Object.create(null, {
      [Symbol(1)]: { value: "symbolKey" },
      abc: { value: "stringKey" },
      set: function (a) {},
      get: function (b) {},
    })
  );
}
{
  let father = { name: "father" };
  log("验证：这是没有原型链的对象", Object.getPrototypeOf(Object.create(null)));
  log("验证：这是有原型链的对象", Object.getPrototypeOf(Object.create(father)));
}
