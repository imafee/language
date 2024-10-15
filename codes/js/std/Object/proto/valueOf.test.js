const { info, log, dir } = console;
const { valueOf } = Object.prototype;

/**
 * Object.prototype.valueOf(value) 将原始类型值转化为对应类型的对象
 * @returns {装包类型}
 */

describe("装箱(boxing)/拆箱(unboxing)", () => {
  test("原始类型值会进行装箱,boxing", () => {
    expect(valueOf.call(1) instanceof Number).toBeTruthy();
    expect(valueOf.call(1n) instanceof BigInt).toBeTruthy();
    expect(valueOf.call("") instanceof String).toBeTruthy();
    expect(valueOf.call(true) instanceof Boolean).toBeTruthy();
    expect(valueOf.call(Symbol()) instanceof Symbol).toBeTruthy();
  });
  test("原始类型对象会进行拆箱,unboxing", () => {
    expect(valueOf.call(1).valueOf()).toBe(1);
    expect(valueOf.call(1n).valueOf()).toBe(1n);
    expect(valueOf.call("1").valueOf()).toBe("1");
    expect(valueOf.call(true).valueOf()).toBe(true);
    const skey = Symbol(1);
    expect(valueOf.call(skey).valueOf()).toBe(skey);
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
