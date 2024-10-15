/**
 * 获取原始类型值的类型名称
 * @param {Primitive} value
 * @returns {String} 类型的小写字符串表示
 */
export function primitiveType(value) {
  const typeString = Object.prototype.toString.call(value);
  return typeString.slice(8, -1).toLowerCase();
}
