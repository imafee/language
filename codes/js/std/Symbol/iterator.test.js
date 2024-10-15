const { iterator } = Symbol;

describe("对象实例上部署迭代器，使其具备迭代能力", () => {
  let object = {
    name: "John",
    age: 30,
    city: "New York",
  };

  test("原始的对象实例没有迭代能力", () => {
    expect(() => {
      for (const [key, value] of object) {
        console.log(key, value);
      }
    }).toThrow();
    expect(() => {
      [...object];
    }).toThrow();
  });

  test("部署了迭代器的对象实例，有了迭代能力", () => {
    // 部署迭代器
    object[Symbol.iterator] = function* () {
      for (const key in this) {
        if (this.hasOwnProperty(key)) yield [key, this[key]];
      }
    };
    // 使用for...of迭代
    for (const [key, value] of object) {
      expect(typeof key).toBe("string");
      expect(typeof value).not.toBeUndefined();
    }
    // 使用解构符迭代
    expect(() => {
      [...object];
    }).not.toThrow();
  });
});
