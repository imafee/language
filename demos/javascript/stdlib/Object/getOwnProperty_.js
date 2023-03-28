// getOwnPropertyDescriptor(obj,prop) 见defineProperty
// getOwnPropertyDescriptors(obj) 见defineProperties
{
  var parent = Object.create(null, {
    hide: function () {},
  });
  var symbolKey = Symbol("111");
  var child = Object.create(parent, {
    show: function () {},
    [symbolKey]: function () {},
  });
  console.log(
    "getOwnPropertyNames(child)\n\
  1，不会返回原型链上的节点的属性\n\
  2，不会返回symbol属性\n\
  ",
    Object.getOwnPropertyNames(child)
  );
}
{
  var parent = Object.create(null, {
    hide: function () {},
  });
  var symbolKey = Symbol("222");
  var child = Object.create(parent, {
    show: function () {},
    [symbolKey]: function () {},
  });
  console.log(
    "getOwnPropertySymbols(child)\n\
  1，不会返回原型链上的节点的属性\n\
  2，不会返回symbol属性\n\
  ",
    Object.getOwnPropertySymbols(child)
  );
}
