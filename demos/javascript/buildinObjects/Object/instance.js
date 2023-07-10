const { info, log, dir } = console;

{
  info("实验：实例化");
  info("无参数");
  log({});
  log(new Object());
  log(Object());
  info("参数为原始类型:返回包装对象");
  info("参数为对象类型:是参数对象其自身");
}
{
  info("因为Object对象指向构造函数，所以以下等效");
  const obj = {};
  log(obj === Object.prototype.constructor(obj)); // true
  log(obj === Object(obj)); // true
  log(obj === new Object(obj)); // true，特别注意
  info("以下不等效");
  log(obj === Object.create(obj)); // false
}
