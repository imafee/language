const { info, log, dir } = console;
const { preventExtensions, seal, freeze, isExtensible, isSealed, isFrozen } =
  Object;

/**
 * 1.Object.preventExtensions(obj) 表不可扩展
 * 2.Object.seal(obj) 表封存
 * 3.Object.freeze(obj) 表冻结
 * @param {Object} obj
 * @return {Object} 参数对象本身
 */

{
  info("字面量定义的对象状态");
  const ext_ = {};
  const seal_ = {};
  const freeze_ = {};
  log(isExtensible(ext_), isSealed(seal_), isFrozen(freeze_)); // true,false,false
  info("改变对象的状态");
  preventExtensions(ext_);
  seal(seal_);
  freeze(freeze_);
  log(isExtensible(ext_), isSealed(seal_), isFrozen(freeze_)); // false,true,true
}
