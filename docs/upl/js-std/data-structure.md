# 常见的数据结构

## Descriptor

属性描述符,用来描述对象实例的一个属性。

数据结构：

```jsonc
// 标准写法
{
  "value": <Any>, // 属性值
  "writable": <Boolean>, // 可写属性
  "enumerable": <Boolean>, // 可枚举属性
  "configurable": <Boolean> // 可配置属性
}
// 函数写法
{
  get(){}, // 读属性
  set(){}, // 写属性
  "enumerable": <Boolean>, // 可枚举属性
  "configurable": <Boolean> // 可配置属性
}
```

默认值：

- 当对象以字面量定义时，所有属性值都是 true
- 当对象以属性描述符定义时，未定义的属性值都是 false

## Descriptors

属性描述符集，又叫属性对象(propertyObject)。用来描述对象实例的所有属性。

数据结构：

```jsonc
{
  <String|Symbol>: <Descriptor>, // key is propName
  ...
}
```

## Entries

字典的条目，常用于映射和查找。可用于：

- 配置实现
- 缓存实现
- 数据转换的中间态

数据结构：

```jsonc
[
  [<String|Symbol>, <Any>], // 键值对，第一个成员为key，第二个成员为value
  ...
]
```
