# webapi 中常见数据结构

## Descriptor 属性描述符(或者叫做属性对象 propertyObject)

用来描述对象的属性。

- 当对象以字面量定义时，属性的这 4 个默认值全为 true
- 当对象以属性描述符定义时，属性的（未定义值）默认值都是 false

```
{
  "value": <Undefined|Any>, // 属性值
  "writable": <Boolean>, // 可写属性
  "enumerable": <Boolean>, // 可枚举属性
  "configurable": <Boolean> // 可配置属性
}
// 或者
{
  get(){},
  set(){},
  "enumerable": <Boolean>, // 可枚举属性
  "configurable": <Boolean> // 可配置属性
}
```

## Descriptors 属性描述符集

```jsonc
{
  <String|Symbol>:<Descriptor>, // key is propName
  ...
}
```

## Entries (字典)条目

```jsonc
[
  [<String|Symbol>,<Any>], // 键值对，第一个成员为key，第二个成员为value
  ...
]
```
