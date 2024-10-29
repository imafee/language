# String

文本字符序列的表示和操作

## 概念

- Unicode：全球通用的文本字符集，使得任何语言符号都能够在任何设备上无缝地使用。它仅仅定义了字符的代码点(code point)，但它并没有定义字符序列如何存储和传输。
- UTF 编码：Unicode Transformation Formats，即 Unicode 转换格式。它定义了 Unicode 代码点转换为字节序列的编码规则.
  - UTF-8：这是一种可变长度的编码方式。使用 1 到 4 个字节表示一个字符。它与 ASCII 编码兼容。因为它对英文文本的存储效率较高，能够很好地处理多种语言，因此广泛用于网页和电子邮件。
  - UTF-16：使用 2 个或 4 个字节（16 位或 32 位）表示一个字符。它在处理某些亚洲语言（如中文、日文和韩文）时较为高效。
  - UTF-32：固定使用 4 个字节表示一个字符。这使得字符的处理变得简单，但体积太大存储和传输效率低。
- 码点和码元：码点(code point)和码元(code unit)是不同的概念。
  - 码点表示 Unicode 的编码，是唯一的。既可以是基本平面的，也可以是辅助平面的。
  - 码元是 UTF-16 或 UCS-2 编码而言的，一个码元是 2 个字节 16 位
    - 基础平面上，1 个码元等于 1 个码点
    - 辅助平面上，2 个码元等于 1 个码点。这种表示方式称为代理对（surrogate pair）。
    - javascript 语言处理字符字面量时，采用的是 UCS-2 编码方式，即以码元为单位来处理。

## Instance

实例化

```javascript
const str1 = "abc"; // 原始值
const str2 = `abc`; // 原始值
const str3 = String("abc"); // 原始值
const str4 = new String("abc"); // String类型的对象实例
```

## Prototype

以下方法来自于原型对象 String.prototype

字符位置相关

<!-- prettier-ignore -->
ecma| api |describe |note |
--- | --- | --- | --- |
1|charAt(index):String|返回字符串中指定位置的字符|index不能为负数
2022|at(index):String|返回字符串中指定位置的字符|用于取代 charAt，index可以使用负数
1|charCodeAt(index):Number|返回指定位置字符的Unicode编码|如果索引超出字符串范围，则返回NaN
2015|codePointAt(index):Number|返回指定位置字符的Unicode编码|该方法支持UTF-16编码的字符，可以正确处理4字节的Unicode字符。
1|indexOf(searchValue, fromIndex):Number|找到匹配值的第一个索引|如果未找到，则返回-1
1|lastIndexOf(searchValue, fromIndex):Number|找到匹配值的最后一个索引|如果未找到，则返回-1
2015|startsWith(searchString,position):Boolean|是否以子串开头
2015|endsWith(searchString,endPosition):Boolean|是否以子串结尾|

字符(串)匹配和选择

<!-- prettier-ignore -->
ecma| api |describe |note |
--- | --- | --- | --- |
1|search(regexp):Number|返回第一个匹配的索引|找不到返回-1。<br>regexp 的 g 标志对结果没有影响，以正则表达式的 lastIndex 为 0 进行
1|localeCompare(that, [locales], [options]):Number|比较两个字符串，根据本地特定的顺序返回比较结果|that（要比较的字符串），locales（ locales字符串或字符串数组），options（选项对象）
1|match(regexp):Array\|\|Null|匹配的结果(不含捕获组)|如果使用了全局（ g）标志，则返回与完整正则表达式匹配的所有结果，但也不会返回捕获组
2018|matchAll(regexp):Iterator|匹配的结果(含捕获组)|regex必须设置全局（g）标志
2015|includes(searchString,position):Boolean|是否包含子串(大小写敏感)|searchString（要搜索的字符串），position（可选，搜索开始的位置，默认为0
1|substring(start,end):Stirng|返回选择范围的子串|范围[start,end)
1|slice(start,end):String|提取一部分字符串|范围[start,end)

剪接、替换

<!-- prettier-ignore -->
ecma| api |describe |note |
--- | --- | --- | --- |
1|concat(...strs):String|返回连接后的新字符串
6|repeat(count):String|返回重复后的新字符串
1|replace(search,subString):String|替换匹配的第一项为子串|若 search为正则表达式，则会调用 regexp.exec进行匹配（可以使用$&等特殊字符来引用匹配结果）
2021|replaceAll():String|替换所有匹配项为子串|如果是正则表达式，必须带有全局标志g
5|trim():String|删除头尾两处的连续空白符
2019|trimStart():String|删除头部的连续空白符
2019|trimEnd():String|删除尾部的连续空白符
2017|padStart(targetLength, padString)|填充头部让字符串达到指定长度
2017|padEnd(targetLength, padString)|填充尾部让字符串达到指定长度
1|split(separator, limit):Array|按分隔符将字符串拆分成数组|separator（分隔符，可以是字符串或正则表达式），<br>limit（可选，返回数组的最大长度）

其他工具

<!-- prettier-ignore -->
ecma| api |describe |note |
--- | --- | --- | --- |
2015|normalize(form):String|字符串转换为规范形式|form可选，"NFC"(默认)、"NFD"、"NFKC"或"NFKD
2019|isWellFormed():Boolean|检查字符串是否是良好形成的|检查字符串是否是良好形成的，即没有被截断的字符,该方法有助于检测和避免字符串中的潜在编码问题。
非标准|toWellFormed():String|将字符串转换为良好形成的状态|将字符串转换为良好形成的状态，即修复被截断的字符
1|toLowerCase():String|将字符串所有字符转换为小写|
1|toUpperCase():String|将字符串所有字符转换为大写|
1|toLocaleLowerCase(locales):String|toLowerCase的本地化版本
1|toLocaleUpperCase(locales):String|toUpperCase的本地化版本
1|valueOf():String|返回字符串对象的值
1|toString():String|返回字符串对象的字符串表示形式
2015|String.prototype[Symbol.iterator]()|已部署了可迭代接口

## Static

<!-- prettier-ignore -->
ecma| api |describe |note |
--- | --- | --- | --- |
|3|String.fromCharCode(num1, ..., numN):String|按照给定的码元，返回字符串||
|2015|String.fromCodePoint(codePoint1, ..., codePointN):String|按照给定的码点，返回字符串||
|2015|String.raw(callSite, ...substitutions):RawString|返回模板字符串点原始字符串形式|表达式会被替换，但转义符不做处理|
