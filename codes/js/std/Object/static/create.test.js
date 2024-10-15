const { create } = Object;

/**
 * Object.create(proto[,propDescriptors]) 创建对象，支持symbol
 * @param {Object} proto - 原型对象
 * @param {PropDescriptors|Object} propDescriptors - 属性描述符集
 * @returns {Object}
 */

test("create方法，支持Symbol键", () => {
  const skey = Symbol(1);
  let object = Object.create(null, { [skey]: { value: "symbol" } });
  expect(object[skey]).toBe("symbol");
});
