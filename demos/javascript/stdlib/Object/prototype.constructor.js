import { info, log } from "/utils/index.js";

{
  log(
    "验证：Object(arg)和new Object(arg)调用的都是Object.prototype.constructor(arg)方法\n",
    "Object.prototype.constructor === Object,",
    Object.prototype.constructor === Object // true
  );
}
{
  var obj = Object(1);
  var inst1 = Object.prototype.constructor(obj);
  var inst2 = Object(obj);
  var inst3 = new Object(obj);
  log(
    "验证：arg为对象时，返回参数对象本身（构造函数不做处理，inst === arg）",
    `\ninst1 === obj,${inst1 === obj}`, // true
    `\ninst2 === obj,${inst2 === obj}`, // true
    `\ninst3 === obj,${inst3 === obj}` // true
  );
}
{
  log(
    "验证：arg为非对象时，产生相应的包装对象，\n",
    'Object("a") instanceof String,',
    Object("a") instanceof String
  ); // true
}
{
  log(
    "验证：参数为null、undefined，或者不传参，将产生空对象\n",
    Object(null), //{}
    Object(undefined), // {}
    Object() //{}
  );
}
