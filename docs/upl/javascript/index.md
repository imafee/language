# Javascript

## Packing and unpacking

装箱基本流程

- 根据基本类型找到相应的对象类型
- 调用该对象类型的构造函数，将值传入
- 得到实例对象

拆箱基本流程

- 若存在inst.valueOf()则执行
- 否则执行inst.toString()
