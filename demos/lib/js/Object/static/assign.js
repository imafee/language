const { info, log, dir } = console;
const { assign } = Object;

/**
 * Object.assign(targetObj[,...sourceObjs]) 自右向左批量复制自身可枚举属性给target
 * @param {Object} targetObj,sourceObjs
 * @returns {Object} targetObj本身
 * 特性：
 * 本质上source上使用原型的getter,target上使用原型的setter
 * 因此原型属性的复制要避免使用该接口，或者避免原型对象成为targetObj参数对象。
 * 原型的属性复制，请使用Object.getOwnPropertyDescriptor/Object.defineProperty组合。
 * 支持string和symbol类型的属性
 */
{
  /**
   * 实验：支持string和symbol属性
   */
  info("支持string和symbol属性");
  const symbolKey = Symbol();
  const sourceObj = {
    [symbolKey]: "symbol",
    strkey: "string",
  };
  const targetObj = {};
  log(assign(targetObj, sourceObj));
}
{
  /**
   * 实验：sources自右向左进行覆盖
   */
  info("sources自右向左进行覆盖");
  const sourceObj1 = {
    a: "a",
    b: "b",
  };
  const sourceObj2 = {
    a: "a1",
    b: "b1",
    c: "c",
    d: "d",
  };
  const targetObj = { a: "default" };
  log(assign(targetObj, sourceObj1, sourceObj2));
}
