const { info, log, dir, error } = console;
const { defineProperty, defineProperties } = Object;

/**
 * Object.defineProperties(obj,propDescriptors) 定义对象的属性集
 * @param {Object} obj - 实例对象
 * @param {PropDescriptors} propDescriptors - 属性描述符集
 * @returns {Object} obj参数本身
 */

{
  /**
   * 实验结果：propDescriptors参数的默认值
   * （同defineProperty接口）
   */
  info("默认值");
  const symbolKey = Symbol();
  let obj = Object.create(null);

  defineProperties(obj, {
    [symbolKey]: { value: "symbol" },
    strpart: { value: "strpart" },
    strfull: {
      value: "strfull",
      writable: true,
      enumerable: true,
      configurable: true,
    },
  });

  log(Object.getOwnPropertyDescriptors(obj));
}
