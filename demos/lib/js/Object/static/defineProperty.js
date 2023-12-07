const { info, log, dir, error } = console;
const { defineProperty, defineProperties } = Object;

/**
 * Object.defineProperty(obj,propName,propDescriptors) 给对象定义一个属性
 * @param {Object} obj - 实例对象
 * @param {PropDescriptor} propDescriptor - 属性描述符
 * @returns {Object} obj参数本身
 */

{
  /**
   * 实验结果1：propDescriptors参数的默认值
   * 1.支持键名为symbol类型
   * 1.接口参数属性缺省时，默认值均为false
   * 1.使用字面量时，属性描述符属性的默认值均为true
   */
  info("默认值");
  const symbolKey = Symbol();
  let obj1 = Object.create(null);
  // 接口定义
  defineProperty(obj1, symbolKey, { value: "symbol" });
  defineProperty(obj1, "strpart", { value: "strpart" });
  defineProperty(obj1, "strfull", {
    value: "strfull",
    writable: true,
    enumerable: true,
    configurable: true,
  });
  // 字面量定义
  let obj2 = { name: "name" };
  log(Object.getOwnPropertyDescriptors(obj1)); // 缺省的全是false
  log(Object.getOwnPropertyDescriptors(obj2)); // 全是true
}
{
  /**
   * 实验结果2：属性描述符属性的作用（对实例属性、其属性描述符配置）
   * 1.enumerable属性: 控制迭代权限
   * 1.writable属性: 控制写入权限，不受configurable的权限约束
   * 1.configurable属性：控制配置权限
   *  1.false时，无权修改属性描述符配置（但是writable是个例外），true表示有权使用属性描述符进行重新定义
   *  1.false时，无权delete该条记录。
   */
  info("属性描述符的作用");
  let obj = Object.create(null);

  defineProperties(obj, {
    alltrue: {
      value: "alltrue",
      writable: true,
      enumerable: true,
      configurable: true,
    },
    allfalse: { value: "allfalse" },
    nowritable: {
      value: "nowritable",
      writable: false,
      enumerable: true,
      configurable: true,
    },
    noconfigurable: {
      value: "noconfigurable",
      writable: true,
      enumerable: true,
      configurable: false,
    },
    noenumerable: {
      value: "noenumerable",
      writable: true,
      enumerable: false,
      configurable: true,
    },
  });
  try {
    obj.nowritable = 1; // 无writable权限，无法写入，报错
  } catch (e) {
    error(e.message);
  }
  try {
    delete obj.noconfigurable; // 无configurable权限，无法删除，报错
  } catch (e) {
    error(e.message);
  }
  try {
    defineProperty(obj, "noconfigurable", {
      value: "overwrite",
      // enumerable: false, // 无configurable权限，无法重新定义，报错
      // configurable: true, // 无configurable权限，无法重新定义，报错
      writable: false, // 修改成功,注意！
    });
  } catch (e) {
    error(e.message);
  }
  log("Object.keys(obj):", Object.keys(obj)); // 没有enumeralbe权限，就不能使用迭代接口取出
  let keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  log("for...in:", keys); // 没有enumeralbe权限，就不能通过迭代语句取出
}
