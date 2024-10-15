const { defineProperty, defineProperties } = Object;

/**
 * Object.defineProperty(obj,propName,propDescriptor) 给对象实例定义一个属性
 * @param {Object} obj - 引用对象实例
 * @param {Descriptor} Descriptor - 属性描述符
 * @returns {Object} 引用
 * --------------------------------------------
 * Object.defineProperties(obj,propDescriptors) 给对象实例定义多个属性
 * @param {Object} obj - 引用对象实例
 * @param {PropDescriptors} propDescriptors - 属性描述符集
 * @returns {Object} 引用
 */

describe("defineProperties接口,支持Symbol键", () => {
  test("", () => {
    let object = {};
    const skey = Symbol("1");
    defineProperties(object, { [skey]: { value: "symbol" } });
    expect(object[skey]).toBe("symbol");
  });
});
describe("属性描述符的缺省值", () => {
  test("defineProperty接口,全为false", () => {
    let object = {};
    defineProperty(object, "key", { value: "value" });
    const { writable, configurable, enumerable } =
      Object.getOwnPropertyDescriptor(object, "key");
    expect(writable).toBeFalsy();
    expect(configurable).toBeFalsy();
    expect(enumerable).toBeFalsy();
  });
  test("create接口,全为false", () => {
    let object = Object.create(null, { key: { value: "value" } });
    const { writable, configurable, enumerable } =
      Object.getOwnPropertyDescriptor(object, "key");
    expect(writable).toBeFalsy();
    expect(configurable).toBeFalsy();
    expect(enumerable).toBeFalsy();
  });
  test("字面量,全为true", () => {
    let object = { key: "value" };
    const { writable, configurable, enumerable } =
      Object.getOwnPropertyDescriptor(object, "key");
    expect(writable).toBeTruthy();
    expect(configurable).toBeTruthy();
    expect(enumerable).toBeTruthy();
  });
});

describe("属性描述符enumerable为false，该属性没有枚举权限", () => {
  const object = {};
  defineProperties(object, {
    enu: {
      enumerable: true,
    },
    noenu: {},
  });
  test("for接口枚举不到该属性", () => {
    let keys = [];
    for (let key in object) {
      keys.push(key);
    }
    expect(keys.includes("noenu")).toBeFalsy();
  });
  test("方法接口枚举不到该属性", () => {
    const keys = Object.keys(object);
    expect(keys.includes("noenu")).toBeFalsy();
  });
});

describe("属性描述符configurable为false，属性没有配置权限", () => {
  const object = {};
  defineProperties(object, {
    key: {},
  });
  test("该属性重新定义时报错", () => {
    expect(() => {
      defineProperties(object, {
        key: { configurable: true },
      });
    }).toThrow(TypeError);
  });

  test("该属性被删除时报错", () => {
    expect(() => {
      delete object.key;
    }).toThrow(TypeError);
  });
});

describe("属性描述符writable为false，属性没有写入权限", () => {
  const object = {};
  defineProperties(object, { key: { writable: false } });
  test("该属性值写入时报错", () => {
    expect(() => {
      object.key = 0;
    }).toThrow(TypeError);
  });
});
