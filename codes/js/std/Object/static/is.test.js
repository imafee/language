const { is } = Object;

/**
 * Object.is(value1,value2) 两个栈值是否相同
 * @param {Any} value
 * @returns {Boolean}
 */

describe("Object.is判断2个参数的栈值是否相同", () => {
  test("原始类型和值类型的比较，考量数据和类型", () => {
    expect(is(1, 1)).toBeTruthy();
    expect(is(1, 1n)).toBeFalsy(); // 类型不同
    expect(is(0, -0)).toBeFalsy(); // 数值符号不同
    expect(is(0, +0)).toBeTruthy();
    expect(is(NaN, NaN)).toBeTruthy();
    expect(is(void 0, void 0)).toBeTruthy();
    expect(is(null, null)).toBeTruthy();
    expect(is(Symbol("1"), Symbol("1"))).toBeFalsy(); // 值不同
  });
  test("引用类型的比较，false", () => {
    const arr = [];
    expect(is(arr, arr)).toBeTruthy(); // 地址相同
    expect(is(arr, [])).toBeFalsy(); // 地址不同
  });
});
