/**
 * ===lang:iterate===
 * forEach 遍历
 * map 遍历返回新数组
 * every 遍历且所有项都通过测试
 * some 遍历且有项通过测试
 * filter 遍历且过滤数组
 * reduce/reduceRight 遍历且归因
 */
const { forEach } = Array.prototype;
test("forEach是无法中途退出的全量迭代", () => {
  const array = [1, 2, 3, 4, 5, 6];
  let value = 0;
  array.forEach((item, index) => {
    // js引擎不报错，jest报错
    // if(index === 1) continue;
    // if(index === 2) break;
    value++;
  });
  expect(value).toBe(6);
});
test("map是无法中途退出的全量迭代", () => {
  const array = [1, 2, 3];
  const result = array.map((item) => item);
  expect(result).toEqual([1, 2, 3]);
});
test("every即每一轮都返回 true 则最终返回 true，遇false会终止迭代并返回 false", () => {
  const arr = [1, 2, 3];
  let count = 0;
  arr.every((item) => {
    count++;
    if (item === 2) return false;
    return true;
  });
  expect(count).toBe(2);
});
test("some即只要有一轮返回 true 则最终返回 true，遇 true会终止迭代并返回 true", () => {
  const arr = [1, 2, 3];
  let count = 0;
  arr.some((item) => {
    count++;
    if (item === 2) return true;
    return false;
  });
  expect(count).toBe(2);
});
test("filter即筛选，用法是遇false 则不返回，是中途无法退出的全量迭代，", () => {
  const array = [1, 2, 3, 4, 5];
  let count = 0;
  const result = array.filter((item) => {
    count++;
    return item < 3;
  });
  expect(result).toEqual([1, 2]);
  expect(count).toBe(5);
});
test("reduce向左汇总，即遍历方向向右", () => {
  const initialValue = 0;
  const callbackFn = function (accumulator, currentValue, currentIndex, array) {
    return Math.max(accumulator, currentValue);
  };
  const arr = [10, 100];
  expect(arr.reduce(callbackFn, initialValue)).toBe(100);
});
test("reduceRight向右汇总，即遍历方向向左", () => {
  // TODO
});
