const { constructor } = Object.prototype;

/**
 * Object.constructor(value) 对象实例的构造器
 * @param {Any} value
 * @returns {Object}
 */

describe("Object.constructor(value)，测试不同类型的实参", () => {
  test("若value为基本类型，则返回其包装对象(即类型一致、值一致)", () => {
    expect(constructor(Symbol("1")) instanceof Symbol).toBeTruthy();
    expect(constructor(true) instanceof Boolean).toBeTruthy();
    expect(constructor(1n) instanceof BigInt).toBeTruthy();
    expect(constructor(1) instanceof Number).toBeTruthy();
    expect(constructor("") instanceof String).toBeTruthy();
    expect(constructor(null)).toEqual({}); // null的包装对象是空对象{}
    expect(constructor(void 0)).toEqual({}); // undefined的包装对象是空对象{}
    expect(constructor()).toEqual({}); // 缺失参数，返回空对象{}
  });
  test("若value为对象类型(引用），则返回其自身", () => {
    const object = {};
    const array = [];
    const fn = function () {};
    expect(constructor(object)).toBe(object);
    expect(constructor(array)).toBe(array);
    expect(constructor(fn)).toBe(fn);
  });
});
