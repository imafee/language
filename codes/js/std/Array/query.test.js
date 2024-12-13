/**
 * ===query===
 * ---查位置---
 * findIndex/findLastIndex(callbackFn) 匹配的第一个/最后一个索引
 * indexOf/lastIndexOf(searchElement, fromIndex) 匹配的第一个/最后一个索引
 * ---查元素或集合---
 * includes 是否包含元素
 * find/findLast((element,index,array)=>{}) 匹配的第一个/最后一个元素值
 * at 按位置返回元素
 * with 替换一个元素
 * slice 范围切片
 */
test("findIndex/findLastIndex用法", () => {
  const arr = ["a", "b", "a"];
  function callbackFn(element, index, array) {
    return element === "a";
  }
  expect(arr.findIndex(callbackFn)).toBe(0);
  expect(arr.findLastIndex(callbackFn)).toBe(2);
});
test("indexOf/lastIndexOf用法", () => {
  const arr = ["a", "b", "a"];
  expect(arr.indexOf("a")).toBe(0);
  expect(arr.lastIndexOf("a")).toBe(2);
});
test("includes用法", () => {
  const arr = ["a", "b", "a"];
  expect(arr.includes("a")).toBeTruthy();
  expect(arr.includes("b")).toBeTruthy();
  expect(arr.includes("c")).not.toBeTruthy();
});
test("find/findLast用法", () => {
  const arr = ["a", "b", "a"];
  let index1 = 0;
  let index2 = 0;
  arr.find((item, index) => {
    index1 = index;
    return item === "a";
  });
  arr.findLast((item, index) => {
    index2 = index;
    return item === "a";
  });
  expect([index1, index2]).toEqual([0, 2]);
});
test("at用法,相比属性访问器可以使用负数取值", () => {
  const arr = ["a", "b", "c"];
  // 第一个元素序号为 0，最后一个元素序号为-1，不对称。
  expect(arr.at(0)).toBe("a");
  expect(arr.at(2)).toBe("c");
  expect(arr.at(-1)).toBe("c");
  expect(arr.at(-2)).toBe("b");
});
test("with用法,替换一个元素值，返回密集数组", () => {
  const arr = ["a", "b", "c"];
  expect(arr.with(0, "x")).toEqual(["x", "b", "c"]);
  expect(arr.with(-1, "z")).toEqual(["a", "b", "z"]);
});
test("slice用法，通常用来浅拷贝", () => {
  const object = { name: "slice" };
  const arr = [object];
  const slicedArr = arr.slice(); // 浅拷贝
  object.name = "sliced"; // 修改对象
  expect(slicedArr[0]).toEqual(arr[0]); // 指针地址相同
});
