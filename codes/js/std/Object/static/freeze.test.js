const {
  preventExtensions,
  seal,
  freeze,
  isExtensible,
  isSealed,
  isFrozen,
  getOwnPropertyDescriptor,
  getOwnPropertyDescriptors,
} = Object;

/**
 * 1.Object.preventExtensions(obj) 属性表不可扩展。记录不能添加
 * 2.Object.seal(obj) 属性表封存。记录不能添加、删除，字段不能改
 * 3.Object.freeze(obj) 属性表冻结，只读。
 * @param {Object} obj
 * @return {Object} 引用
 */

describe("实例状态的改变", () => {
  test("实例可扩展时", () => {
    const object = { name: "status" };
    expect(getOwnPropertyDescriptor(object, "name")).toMatchObject({
      configurable: true,
      writable: true,
      enumerable: true,
    });
    expect(isExtensible(object)).toBeTruthy(); // 查看实例
    expect(isSealed(object)).not.toBeTruthy();
    expect(isFrozen(object)).not.toBeTruthy();
  });
  test("实例不可扩展时", () => {
    const object = { name: "status" };
    preventExtensions(object);
    expect(getOwnPropertyDescriptor(object, "name")).toMatchObject({
      configurable: true,
      writable: true,
      enumerable: true,
    });
    expect(isExtensible(object)).not.toBeTruthy(); // !
    expect(isSealed(object)).not.toBeTruthy();
    expect(isFrozen(object)).not.toBeTruthy();
  });
  test("实例封存态时", () => {
    const object = { name: "status" };
    seal(object);
    expect(getOwnPropertyDescriptor(object, "name")).toMatchObject({
      configurable: false, // !
      writable: true,
      enumerable: true,
    });
    expect(isExtensible(object)).not.toBeTruthy(); // !
    expect(isSealed(object)).toBeTruthy();
    expect(isFrozen(object)).not.toBeTruthy(); // !
  });
  test("实例冻结态时", () => {
    const object = { name: "status" };
    freeze(object);
    expect(getOwnPropertyDescriptor(object, "name")).toMatchObject({
      configurable: false, // !
      writable: false, // !
      enumerable: true,
    });
    expect(isExtensible(object)).not.toBeTruthy(); // !
    expect(isSealed(object)).toBeTruthy(); // !
    expect(isFrozen(object)).toBeTruthy(); // !
  });
});
