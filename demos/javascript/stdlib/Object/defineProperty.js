import { log } from "/utils/index.js";

{
  var symbol = Symbol();
  var obj = {
    name: "name",
    [symbol]: 123,
    get: function () {
      console.log("get");
    },
    set: function () {
      console.log("set");
    },
  };
  log(
    "case: 字面量定义时\n\
    1.属性描述符的默认值全都是true：configurable: true,enumerable:true,writable:true\n\
    2.不支持symbol类型",
    Object.getOwnPropertyDescriptor(obj, "name"), // getOwnPropertyDescriptor接口看不到get和set
    Object.getOwnPropertyDescriptor(obj, symbol) // undefined,不支持symbol类型
  );
  Object.defineProperty(obj, "test", {
    value: "test",
  });
  log(
    "case: 接口定义时\n\
    1.属性描述符的默认值全都是false：configurable: false,enumerable:false,writable:false\n",
    Object.getOwnPropertyDescriptor(obj, "test")
  );
}
{
  var obj = { name: "obj" };
  log(
    "case: Object.defineProperty接口可以连续进行覆写操作,",
    Object.defineProperty(obj, "name", { value: "obj1" }).name,
    Object.defineProperty(obj, "name", { value: "obj2" }).name
  );
}
{
  log("case: writable可写权限");
  let o = Object.create(null);
  Object.defineProperty(o, "test", {
    value: "writable可写权限关闭,写不进去",
    writable: false,
  });
  try {
    o.test = "偏要写";
  } catch (e) {
    log("写入失败！");
  }
}
{
  log("case: enumerable可枚举权限");
  let o = { str1: "可枚举", [Symbol(2)]: "可枚举" };
  Object.defineProperties(o, {
    str2: {
      value: "不可枚举stirng",
      enumerable: false,
    },
    [Symbol(2)]: {
      value: "不可枚举symbol",
      enumerable: false,
    },
  });

  // 使用遍历接口读取属性（不可枚举）
  log("Object.keys只支持可枚举属性", Object.keys(o)); // 只打印出可枚举属性，只支持string类型的键
  log("Object.values只支持可枚举属性", Object.values(o)); // 只打印出可枚举属性，只支持string类型的键
  log(
    "Object.getOwnPropertyDescriptors与枚举类型无关，与键的类型无关全列出来\n",
    Object.getOwnPropertyDescriptors(o)
  ); // 枚举类型和不可枚举属性都列出来，键值类型是string和symbol的都列出来
  log(
    "Object.getOwnPropertyNames与枚举类型无关，键值是string类型的全都列出来",
    Object.getOwnPropertyNames(o)
  ); // 枚举类型和不可枚举属性都列出来，键值类型是string的都列出来
  log(
    "Object.getOwnPropertySymbols与枚举类型无关，键值是symbol类型的全都列出来",
    Object.getOwnPropertySymbols(o)
  ); // 枚举类型和不可枚举属性都列出来，键值类型是symbol的都列出来
  log(
    "Object.entries,只支持可枚举属性,只支持string类型键值",
    Object.entries(o)
  ); // 可枚举类型 & 键值类型是string的

  // 使用遍历语法读取属性（不可枚举）
  for (let i in o) log("for-in", i); // test无法枚举,name可以！原型链上的属性呢？

  // 使用访问器访问自身属性（不可枚举）
  log(o.test); // 可以取出
  log(o["test"]); // 可以取出

  // 使用接口查询自身属性（不可枚举）
  log(o.hasOwnProperty("test")); // true，可以查询
}
{
  log(
    "case: configurable配置权限。结论：\n",
    "1,若设为false，则无法删除属性（但仍可以修改属性）\n",
    "2,一旦设为false,则无法再次对属性描述符进行修改"
  );
  let o = Object.create(null);
  Object.defineProperty(o, "test", {
    value: "test:",
    writable: true,
    enumerable: true,
    configurable: false,
  });
  log(Object.getOwnPropertyDescriptor(o, "test"));

  // 修改属性
  try {
    o.test = {};
    log("修改属性成功"); // goto here
  } catch (e) {
    log("修改属性失败:", e.message);
  }

  // 增加属性
  try {
    o.test.a = 1;
    log("增加属性成功"); // goto here
  } catch (e) {
    log("增加属性失败:", e.message);
  }

  // 删除属性
  try {
    delete o.test.a;
    log("删除属性成功！"); // goto here
  } catch (e) {
    log("删除属性失败:", e.message);
  }
  try {
    delete o.test;
    log("删除属性成功！");
  } catch (e) {
    log("删除属性失败:", e.message); // goto here
  }

  // 修改属性描述符
  try {
    Object.defineProperty(o, "test", {
      configurable: true,
    });
    log("修改属性描述符成功");
  } catch (e) {
    log("修改属性描述符失败:", e.message); // goto here
  }
}
