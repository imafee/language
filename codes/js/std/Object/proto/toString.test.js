const { toLocaleString, toString } = Object.prototype;

/**
 * Object.prototype.toString() 字符串表示的对象类型
 * @returns {String} - '[object 类型]'
 */

describe("查看Object.prototype.toString.call(value)的兼容性:很好", () => {
  function primitiveType(value) {
    const typeString = Object.prototype.toString.call(value);
    return typeString.slice(8, -1).toLowerCase();
  }
  test("Privitive type", () => {
    expect(primitiveType("1")).toBe("string");
    expect(primitiveType(1)).toBe("number");
    expect(primitiveType(1n)).toBe("bigint");
    expect(primitiveType(true)).toBe("boolean");
    expect(primitiveType(Symbol())).toBe("symbol");
    expect(primitiveType(void 0)).toBe("undefined");
    expect(primitiveType(null)).toBe("null");
  });
  test("Error有关的全局对象", () => {
    expect(primitiveType(new Error())).toBe("error");
    expect(primitiveType(new EvalError())).toBe("error");
    // expect(primitiveType(Promise.reject("reject"))).toThrow(Object);
    expect(primitiveType(new RangeError())).toBe("error");
    expect(primitiveType(new ReferenceError())).toBe("error");
    expect(primitiveType(new SyntaxError())).toBe("error");
    expect(primitiveType(new TypeError())).toBe("error");
    expect(primitiveType(new URIError())).toBe("error");
  });
  test("其他全局对象实例", () => {
    expect(primitiveType(NaN)).toBe("number");
    expect(primitiveType(Infinity)).toBe("number");
    expect(primitiveType(globalThis)).toBe("object");
    expect(primitiveType({})).toBe("object");
    expect(primitiveType(new Map())).toBe("map");
    expect(primitiveType(new WeakMap())).toBe("weakmap");
    expect(primitiveType(new Set())).toBe("set");
    expect(primitiveType(new WeakSet())).toBe("weakset");
    expect(primitiveType([])).toBe("array");
    expect(primitiveType(new Int8Array())).toBe("int8array");
    expect(primitiveType(new Uint8Array())).toBe("uint8array");
    expect(primitiveType(new Uint8ClampedArray())).toBe("uint8clampedarray");
    expect(primitiveType(new BigInt64Array())).toBe("bigint64array");
    expect(primitiveType(new BigUint64Array())).toBe("biguint64array");
    expect(primitiveType(new Float32Array())).toBe("float32array");
    expect(primitiveType(new Function())).toBe("function");
    expect(primitiveType(new Proxy({}, {}))).toBe("object");
    // expect(new Reflect()).toThrow(); // Reflect不是构造器
    expect(primitiveType(new ArrayBuffer(8))).toBe("arraybuffer");
    expect(primitiveType(new DataView(new ArrayBuffer(8)))).toBe("dataview");
    expect(primitiveType(new WeakRef({}))).toBe("weakref");
    expect(primitiveType(new FinalizationRegistry(() => {}))).toBe(
      "finalizationregistry"
    );
    expect(primitiveType(new Date())).toBe("date");
    // expect(new Math()).toThrow(); // Math不是构造器
    expect(primitiveType(new RegExp())).toBe("regexp");
    // expect(new Intl()).toThrow(); // Intl不是构造器
  });
});
