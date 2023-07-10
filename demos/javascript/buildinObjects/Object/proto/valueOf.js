const { info, log, dir } = console;
const { valueOf } = Object.prototype;

/**
 * Object.prototype.valueOf() 将值转化为对应类型的对象
 * @returns {Object}
 */
{
  /**
   * 将部分primitive value转化为对象（值类型）
   */
  function wrapper(any) {
    const { valueOf } = Object.prototype;
    if ([null, undefined].includes(any))
      throw "TypeError: Cannot convert undefined or null to object";
    // if (typeof any === "object") return any;
    return valueOf.call(any);
  }
  // log(wrapper(void 0));
  // log(wrapper(null));
  // log(wrapper(Symbol()));
  log(wrapper(1));
  log(wrapper(1n));
  log(wrapper(""));
  log(wrapper(true));
  log(wrapper({ name: "1" }));
  log(wrapper([1]));
  // ...
}
