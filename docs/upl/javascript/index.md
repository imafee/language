# Javascript

## simpleLibrary

原生接口众多、历史包袱沉重，不利于学习和归纳。
因此引入`simpleLibrary.js`,从使用该库去了解原生接口。

## Packing and unpacking

装箱基本流程

- 根据基本类型找到相应的对象类型
- 调用该对象类型的构造函数，将值传入
- 得到实例对象

拆箱基本流程

- 若存在inst.valueOf()则执行
- 否则执行inst.toString()
