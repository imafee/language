# data structure

## Descriptor 属性描述符(或者叫做属性对象propertyObject)

这是一个用来描述属性的对象，有4个属性可供使用：value\writable\enumerable\configurable
当对象以字面量定义时，属性的这4个默认值全为true
当对象以属性描述符定义时，属性的（未定义值）默认值都是false

```json
{
  "value": <String>,
  "writable": <Boolean>, // 可写属性,默认值为false
  "enumerable": <Boolean>, // 可枚举属性,默认值为false
  "configurable": <Boolean> // 可配置属性,默认值为false
}
```

相关接口

- `Object.defineProperty`

## Descriptors 属性描述符集

```jsonc
{
  <String>:<Descriptor>, // key is propName
  ...
}
```

相关接口

- `Object.defineProperties`

## Entries (字典)条目

```jsonc
[
  [<String|Symbol>,value], // 第一个为key，第二个为value，是键值对
  ...
]
```

相关接口

- `Object.entries`
