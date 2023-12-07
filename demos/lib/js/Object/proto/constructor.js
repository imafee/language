const { info, log, dir } = console;
const { constructor } = Object.prototype;

/**
 * constructor(value) 对象数据结构的构造函数
 * @param {any} value
 * @returns {Object}
 */
{
  info("\n使用：传入基本类型的值，返回(包装为)一个对应类型的对象");
  log(constructor(Symbol("1"))); // Symbol inst
  log(constructor(true)); // Boolean inst
  log(constructor(1)); // Number inst
  log(constructor(1n)); // BigInt inst
  log(constructor("1")); // String inst

  info("null和undefined没有对应的类，返回空对象");
  log(constructor(null)); // {}
  log(constructor(undefined)); // {}
  log(constructor()); // {}
}
{
  info("\n边界：传入对象类型，返回其本身");
  const obj = {};
  const arr = [];
  log(constructor(obj) === obj); // true
  log(Object(obj) === obj); // true
  log(new Object(obj) === obj); // true
  log(constructor(arr) === arr); // true
}
{
  info("\nObject对象指向了Object.prototype.constructor");
  log(Object === Object.prototype.constructor); // true
}
