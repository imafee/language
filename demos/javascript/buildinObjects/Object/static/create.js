const { info, log, dir } = console;
const { create } = Object;

/**
 * Object.create(proto[,propDescriptors]) 创建对象
 * @param {Object} proto - 原型对象
 * @param {PropDescriptors|Object} propDescriptors - 属性描述符集
 * @returns {Object}
 */

{
  info("* 创建对象及自身属性", "\n属性描述符支持symbol作为键名");
  const symbolKey = Symbol(1);
  let obj = Object.create(null, {
    [symbolKey]: { value: "symbol" },
    strkey: { value: "string" },
  });
  log(Object.getOwnPropertyDescriptors(obj));
}

{
  info("\n* 原型链的创建和查看");
  let father = { name: "father" };
  let nullobj = Object.create(null);
  let fatherobj = Object.create(father);
  log("原型对象是", Object.getPrototypeOf(nullobj));
  log("原型对象是", Object.getPrototypeOf(fatherobj));
}
