const { info, log, dir } = console;
const { valueOf } = Object.prototype;

/**
 * Object.prototype.valueOf(value) 将原始类型值转化为对应类型的对象
 * @returns {装包类型}
 */

describe("装包 boxing", () => {
  test("原始类型值会进行装包", () => {
    expect(valueOf.call(1) instanceof Number).toBeTruthy();
    expect(valueOf.call(1n) instanceof BigInt).toBeTruthy();
    expect(valueOf.call("") instanceof String).toBeTruthy();
    expect(valueOf.call(true) instanceof Boolean).toBeTruthy();
    expect(valueOf.call(Symbol()) instanceof Symbol).toBeTruthy();
  });
  test("null和undefined会报错", () => {
    expect(() => {
      valueOf.call(null);
    }).toThrow(TypeError);
    expect(() => {
      valueOf.call(void 0);
    }).toThrow(TypeError);
  });
});
