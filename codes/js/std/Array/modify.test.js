/**
 * ===modify===
 * fill* 长度填充来改变元素值
 * copyWithin* 长度不变的选区覆盖
 * reverse* 序号反转，倒序
 * sort* 自定义排列顺序
 * toSorted 函数式 sort 方法
 */
test("fill用法", () => {
  const arr = [];
  arr.length = 3;
  arr.fill(0); // 第三个参数不写，默认值为arr.length
  expect(arr).toEqual([0, 0, 0]);
  arr.length = 6;
  arr.fill(1, 3, arr.length); // 第二和第三个参数的用法，范围[index1,index2)
  expect(arr).toEqual([0, 0, 0, 1, 1, 1]);
});
test("copyWithin用法", () => {
  const arr = [0, 1, 2, 3, 4, 5];
  expect(arr.copyWithin(4, 0, 3)).toEqual([0, 1, 2, 3, 0, 1]);
  expect(arr.copyWithin(4, 0, 4)).toEqual([0, 1, 2, 3, 0, 1]); // 即使范围右值变化，数组长度不变
});
test("reverse用法", () => {
  const arr = [0, 1, 2, 3];
  arr.reverse();
  expect(arr).toEqual([3, 2, 1, 0]); // 副作用方法
});
test("sort自定义排序。返回值为 false 就调换两者的位置", () => {
  // 需求：根据年龄升序排序
  const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 28 },
  ];
  users.sort((a, b) => a.age - b.age);
  expect(users[0].age).not.toBe(30); // 副作用方法
  expect(users[0].age).toBe(25);
});
test("toSort,无副作用", () => {
  // 需求：根据年龄升序排序
  const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 28 },
  ];
  const users2 = users.toSorted((a, b) => a.age - b.age);
  expect(users[0].age).toBe(30); // 无副作用方法
  expect(users2[0].age).toBe(25);
});
