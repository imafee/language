const { info, log, dir } = console;
const { entries, fromEntries } = Object;

/**
 * Object.entries(obj) 数据结构转换 object-->entries
 * @param {Object} obj
 * @returns {Entries}
 * Entries:[Entry]
 * Entry:[key:value] 键值对数组
 */
{
  /**
   * 实验：enumerable
   */
  info("*entries：不返回symbol类型键名的属性，不返回无枚举权限的属性");
  const obj = Object.create(null);
  const symbolKey = Symbol();
  Object.defineProperties(obj, {
    [symbolKey]: { value: "symbol", enumerable: true },
    noenumerable: { value: "noenumerable", enumerable: false },
    key: { value: "value", enumerable: true },
  });
  log(entries(obj));
}
/**
 * Object.fromEntries(entries) 数据结构转换 entries-->object
 * @param {Entries} entries
 * @returns {Object}
 */
{
  info("*fromEntries：返回symbol类型");
  const symbolKey = Symbol();
  const entries = [
    ["key1", "value1"],
    ["key2", "value2"],
    [symbolKey, "symbol"],
  ];
  log(fromEntries(entries));
}
