/**
 * ===add===
 * push* 尾部位置
 * unshift* 头部位置
 * ===delete===
 * pop* 尾部位置
 * shift* 头部位置
 * arr.length = n 长度修改(可清空）
 * ===特殊===
 * splice* 任意位置的删除与插入
 * toSpliced 函数式 splice 方法
 */

const { push, unshift, fill } = Array;

test("push&unshift用法", () => {
  const arr = [];
  arr.push("end");
  arr.unshift("start");
  expect(arr[0]).toBe("start");
  expect(arr[arr.length - 1]).toBe("end");
});

test("pop&shift用法", () => {
  const arr = [1, 2, 3, 4, 5];
  arr.shift();
  arr.shift();
  arr.pop();
  arr.pop();
  expect(arr).toEqual([3]);
  arr.length = 0;
  expect(arr).toEqual([]);
});

test("toSpliced用法", () => {
  const arr = [0, 1, 2, 3, 4, 5];
  const arr1 = arr.toSpliced(1, 3, "x", "y");
  expect(arr).toEqual([0, 1, 2, 3, 4, 5]); // 没变
  expect(arr1).toEqual([0, "x", "y", 4, 5]); // 首先删除 3 个元素，然后插入 2 个元素
});
