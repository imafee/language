const { info, log, dir } = console;
const { keys, values } = Object;

/**
 * Object.keys(obj) 可枚举的键名数组
 * Object.values(obj) 可枚举的键值数组
 * @param {Object} obj
 * @return {Array}
 */
{
  /**
   * 实验结果：
   * 1.键名是Symbol类型，不支持
   * 1.键值是不可枚举类型，不输出
   */
  const symbolKey = Symbol();
  const obj = Object.create(null, {
    [symbolKey]: { value: "symbolValue", enumerable: true },
    strkey1: { value: symbolKey, enumerable: true },
    strKey2: { value: "str", enumerable: true },
    enum: { value: "noenum", enumerable: false },
  });
  // log(obj);
  log(Object.keys(obj)); // 不返回键名为symbol类型的记录，不返回不可枚举记录
  log(Object.values(obj)); // 不返回键名为symbol类型记录，不返回不可枚举记录
}
