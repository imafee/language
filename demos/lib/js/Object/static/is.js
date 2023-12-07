const { info, log, dir } = console;
const { is } = Object;

/**
 * Object.is(value,value) 两个值是否相同
 * @param {Primitive-Type} value
 * @returns {Boolean}
 */
{
  /**
   * 实验1:primitive value，相同
   * ==与is的区别：==运算符强制对两边进行类型转换（如果类型不相同时）
   * ===与is的区别：===运算符将0、-0视为相同，将NaN与NaN视为不相同
   */
  const symbol = Symbol();
  info("原始值的相同比较");
  log(is(undefined, void 0)); // true
  log(is(null, null)); // true
  log(is(true, true)); // true
  log(is("abc", "abc")); // true:相同长度、相同字符、相同排序
  log(is(symbol, symbol)); // true
  log(is(0, 0)); // true
  log(is(0, -0)); // false
  log(is(0, +0)); // true,!
  log(is(NaN, NaN)); // true
  log(is(1, 1)); // true,非零、非NaN的相同值为相同
  log(is(1n, 1n)); // true:bigints
}
{
  /**
   * 实验2:object value，看栈值
   */
  info("对象的相同比较");
  const obj = {},
    obj1 = obj;
  const arr = [],
    arr1 = arr;
  log(is(obj, {})); // false
  log(is(obj, obj)); // true
  log(is(arr, [])); // false
  log(is(arr, arr)); // true
}
