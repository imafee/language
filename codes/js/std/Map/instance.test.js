test("使用new来实例化", () => {
  expect(() => {
    Map(); // 错误的实例化，缺少new
  }).toThrow();

  const map = new Map(); // 正确的实例化
  map.set("a", 1);
  expect(new Map([["a", 1]])).toEqual(map);
  expect(map.size).toBe(1); // 实例的属性
});
