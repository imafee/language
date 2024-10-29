# 严格模式

字面量表达式语句

```javascript
"use strict";
```

## 声明严格模式

显式声明：

- 全局代码的开始处加入
- 在 eval 代码开始处加入
- 在函数声明代码开始处加入
- 在 new Function()所传入的 body 参数块开始处加入

隐式声明（默认开启）：

- 模块中
- 类声明和类表达式的整个声明块中
- 在引擎和宿主的运行参数中指定，比如"node --use_strict"

## 语法限制

开启严格模式后

| 分类           | 说明                                                | 示例 |
| -------------- | --------------------------------------------------- | ---- |
| 对象字面量声明 | 不许对象字面量声明中存在相同的属性名                |      |
| 函数声明       | 不许出现相同的参数名                                |      |
| 赋值运算       | eval 和 arguments 标识符不能声明或重写              |      |
| delete         | 不许 delete 掉 eval、argumetns 和所有显式声明的变量 |      |
| 标识符         | 声明的标识符不能使用关键字和保留字                  |      |
| with           | 不能使用 with                                       |      |

## 执行限制

开启严格模式后

- 对不存在的标识符赋值时，会导致引用错误(ReferenceError)
- 运算符处理无法处理的操作数时，会导致类型异常(TypeError)或语法错误(SyntaxError)
- 访问 arguments.callee 或 fn.callee，会导致类型异常(TypeError)
- 对 arguments 的修改不起作用。

```javascript
function f1(x) {
  "use strict";
  arguments[0] = 100;
  return x;
}
function f2(x) {
  arguments[0] = 100;
  return x;
}
f1("a"); // 严格模式下返回'a'
f2("a"); // 非严格模式返回 100`
```

## 严格模式的范围

TODO
