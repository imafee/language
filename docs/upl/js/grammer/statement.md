# 语句

代码文本（通常）总是由语句构成的，他是语法分析的核心元素。

关键点：

- 单行语句，以分号;来分隔。
- 复合语句，以大括号{}分隔。
- 一些语句存在返回值

| 类型       | 子类型         | 语法示例                                                                 |
| ---------- | -------------- | ------------------------------------------------------------------------ |
| 声明语句   | 数据声明语句   | var \| let \| const AssignmentPattern = expression                       |
| 声明语句   | 函数声明语句   | function name(){}<br>function\* name(){}<br>class name extends superName |
| 声明语句   | 导入导出语句   | import ... <br> export ...                                               |
| 表达式语句 | 变量赋值语句   | variable = value;                                                        |
| 表达式语句 | 函数调用语句   | foo();                                                                   |
| 表达式语句 | 属性赋值语句   | object.property = value;                                                 |
| 表达式语句 | 方法调用语句   | object.method()                                                          |
| 分支语句   | 条件分支语句   | if...else                                                                |
| 分支语句   | 多重分支语句   | switch...case...default                                                  |
| 循环语句   | for            | for(initialization;test;increament)                                      |
| 循环语句   | for...in       | for(let variable in propertyChain)                                       |
| 循环语句   | for...of       | for(let variable of iterator)                                            |
| 循环语句   | while          | while(expression) statement                                              |
| 循环语句   | do...while     | do statement while(expression)                                           |
| 控制结构   | 继续执行子句   | continue [label];                                                        |
| 控制结构   | 中断执行子句   | break [label];                                                           |
| 控制结构   | 函数返回子句   | return [label]                                                           |
| 控制结构   | 异常触发语句   | throw expression;                                                        |
| 控制结构   | 异常捕获与处理 | try...catch...finally                                                    |
| 其他       | 空语句         | ;                                                                        |
| 其他       | 块/复合语句    | {} <br> {...}                                                            |
| 其他       | with 语句      | with(object) statement                                                   |
| 其他       | 调试语句       | debugger;                                                                |
| 其他       | 标签化语句     | labelname: statement                                                     |
