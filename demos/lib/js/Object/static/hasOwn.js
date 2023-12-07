const { info, log, dir } = console;
const { hasOwn } = Object;

/**
 * Object.hasOwn(obj,propName) 自身属性中包含
 * @param {Object} obj
 * @param {String|Symbol} propName
 * @returns {Boolean}
 */
{
  /**
   * 实验：支持symbol，与enumerable无关（仅仅是查询，并没有迭代）
   */
  const symbolKey = Symbol();
  let obj = Object.create(null, {
    [symbolKey]: { value: "symbol", enumerable: true },
    noenumeralbe: { value: "noenumeralbe", enumerable: false },
    normal: { value: "normal", enumerable: true },
  });
  log(hasOwn(obj, symbolKey));
  log(hasOwn(obj, "noenumeralbe"));
  log(hasOwn(obj, "normal"));
}
