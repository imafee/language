const { info, log, dir } = console;

{
  info(`实验:构造函数无参数时
结论:\n
返回空的对象实例
`);
  log({});
  log(new Object());
  log(Object());
}
{
  info("实验：实例与原型的关系");
  const obj = {};
  log(Object.getPrototypeOf(obj) === Object.prototype); // true
  log(obj.__proto__ === Object.prototype); // true,不推荐这样编码，只是为了直观说明关系
  info("以下不等效");
  log(obj === Object.create(obj)); // false，两个对象
}
