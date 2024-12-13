/**
 * keys 返回iterator 对象
 * values 返回 iterator 对象
 * flat 数组降维
 * flatMap 高级数组降维，外层map里层 flat
 * concat 合并数组（单层）
 * join 转为字符串
 * entries 数据类型转换
 * Array.isArray(array) 是否为数组
 * Array.of(...elementN) 元素序列转数组
 * Array.from(arrayLike, [cb], [thisArg]) 类数组转数组
 * Array.fromAsync(arrayLike, [cb], [thisArg]) 同上的异步方法
 */
test("keys&values用法", () => {
  const arr = ["a", "b", "c"];
  const iterator = arr.values();
  let count = 0;
  for (const value of iterator) {
    expect(value).toBe(arr[count]);
    count++;
  }
});
test("flat&flatmap用法", () => {
  const arr = [1, [2, [3, [4]]]];
  arr.length = 5;
  // flat会删除稀疏数组的空槽
  // flat不处理类数组的元素
  expect(arr.flat(Infinity)).toEqual([1, 2, 3, 4]);
  // flatmap,即外层是map，里层是深度为 1的flat
  const result = arr.flatMap((element, index, array) => element);
  expect(result).toEqual([1, 2, [3, [4]]]);
});
test("concat用法", () => {
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  expect(arr1.concat(arr2)).toEqual([1, 2, 3, 4]);
});
test("join用法", () => {
  const arr = [1, 2, 3];
  expect(arr.join(",")).toBe("1,2,3");
});
test("entries用法", () => {
  const arr = ["a", "b", "c"];
  const entries = arr.entries();
  let count = 0;
  for (const entry of entries) {
    expect(entry).toEqual([count, arr[count]]);
    count++;
  }
});
test("isArray用法", () => {
  const arr = [];
  expect(Array.isArray(arr)).toBeTruthy();
});
test("Array.of用法", () => {
  expect(Array.of(1, 2, 3)).toEqual(Array(1, 2, 3)); // [1, 2, 3]
  const arr = [];
  arr.length = 3;
  expect(arr).toEqual(Array(3)); // 两种空槽数组的产生
});
test("Array.from&fromAsync用法", () => {
  // 应用于可迭代对象或者类数组对象
  // 可迭代对象：部署了object[Symbol.iterator]
  // 类数组对象：拥有 length属性 和索引元素的对象
  // TODO
});
