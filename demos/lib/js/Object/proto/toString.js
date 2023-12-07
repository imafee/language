const { info, log, dir } = console;

/**
 * Object.prototype.toString() 表示对象的字符串
 * @returns {String} - '[object 类型]'
 */
{
  /**
   * 类型判断
   */
  function typeIs(any) {
    const { toString } = Object.prototype;
    return toString.call(any).slice(8, -1).toLowerCase();
  }
  log(typeIs(void 0));
  log(typeIs(null));
  log(typeIs(Symbol()));
  log(typeIs(1));
  log(typeIs(1n));
  log(typeIs(""));
  log(typeIs(true));
  log(typeIs(new Error()));
  log(typeIs({}));
  log(typeIs([]));
  // ...
}
