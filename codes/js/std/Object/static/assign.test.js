const { assign } = Object;

/**
 * Object.assign(targetObj[,...sourceObjs]) 向左批量复制自身可枚举属性给target。支持Symbol类型属性
 * @param {Object} targetObj 引用对象
 * @param {Object} sourceObjs 待复制属性的对象
 * @returns {Object} 引用对象本身
 * 机制：source上使用原型的getter,target上使用原型的setter。因此原型属性的复制要避免使用该方法，或者原型对象避免成为targetObj。
 * 若要对原型的属性进行复制，请使用getOwnPropertyDescriptor/Object.defineProperty组合。
 */
test("支持symbol属性", () => {
  let target = {};
  const skey = Symbol(1);
  const source = { [skey]: 2 };
  assign(target, source);
  expect(target[skey]).toBe(2);
});
test("向左进行批量属性覆盖", () => {
  let target = { name: "target" };
  const source1 = { name: "source1", a: 1 };
  const source2 = { name: "source2", b: 2 };
  assign(target, source1, source2);
  expect(target).toEqual({
    name: "source2",
    a: 1,
    b: 2,
  });
});
