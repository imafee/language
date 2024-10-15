/**
 * 实例的创建
 */

test("实例的原型（原型属性指向）是Object", () => {
  expect(Object.getPrototypeOf({})).not.toBeNull();
  expect(Object.getPrototypeOf(new Object())).not.toBeNull();
  expect(Object.getPrototypeOf(Object())).not.toBeNull();
  expect(Object.getPrototypeOf(Object.prototype.constructor())).not.toBeNull();
});
test("Object.create(null, {}) 创建没有原型(原型属性指向为空)的实例", () => {
  const object = Object.create(null, {});
  expect(Object.getPrototypeOf(object)).toBeNull();
});
