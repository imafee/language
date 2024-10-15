test("默认就有迭代能力", () => {
  const map = new Map([
    ["a", 1],
    ["b", 2],
  ]);
  // 使用for...of迭代
  for (const [key, value] of map) {
    expect(typeof key).toBe("string");
    expect(typeof value).not.toBeUndefined();
  }
  // 使用解构符迭代
  expect(() => {
    [...map];
  }).not.toThrow();
});
