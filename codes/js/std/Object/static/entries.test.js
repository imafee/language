const { entries, fromEntries } = Object;

/**
 * Object.entries(object) 数据结构转换（object-->entries）
 * @param {Object} object
 * @returns {Entries}
 */
/**
 * Object.fromEntries(entries) 数据结构转换（entries-->object），支持symbol
 * @param {Entries} entries
 * @returns {Object}
 */

test("entries方法不支持symbol,采用忽略方式", () => {
  const object = { [Symbol(1)]: 1, str: 2 };
  expect(entries(object)).toEqual([["str", 2]]); // 只返回字符串类型的键值对
});
test("fromEntries方法不支持symbol，采用报错方式", () => {
  const skey = [Symbol(1)];
  const entries = [[[skey], 1]];
  expect(() => {
    fromEntries(entries);
  }).toThrow();
});
