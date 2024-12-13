# typed arrays

参考

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
- https://web.dev/articles/webgl-typed-arrays?hl=zh-cn

## 概念

类型化数组和数组是完全不同的数据结构，无法共用原型方法，存储结构也不相同。

类型化数组分为 2 种：

- 缓存：表示了数据块的对象。它没有格式可言，没有提供访问其内容的机制。必须借助视图来读取。
- 视图：它提供了上下文（数据类型、起始偏移量和元素数量）来访问缓存中的内存

| 分类 | name              | 名称             | 说明                                                       |
| ---- | ----------------- | ---------------- | ---------------------------------------------------------- |
| 缓存 | ArrayBuffer       | 数组缓冲区类     | 固定长度的原始二进制数据缓冲区的类，无法直接操作           |
| 缓存 | SharedArrayBuffer | 共享数组缓冲区类 | ArrayBuffer 的扩展，允许在多线程之间共享同二进制数据缓冲区 |
| 视图 | DataView          | 数据视图         | 提供了灵活的读写方式，适合处理不同数据类型和字节对齐的情况 |
| 视图 | TypedArrayView    | 类型化视图       | 处理同类型的二进制数据                                     |

## ArrayBuffer

// TODO

## SharedArrayBuffer

// TODO

## DataView

// TODO

## TypedArrayView

类型化视图

| Type              | Size(Byte) | 对应的接口定义(Web-IDL) | 等效的 C 语言类型             | Note                           |
| ----------------- | ---------- | ----------------------- | ----------------------------- | :----------------------------- |
| Int8Array         | 1          | byte                    | int8_t                        | 8 位有符号整数(补码)           |
| Uint8Array        | 1          | octet                   | uint8_t                       | 8 位无符号整数。               |
| Uint8ClampedArray | 1          | octet                   | uint8_t                       | 8 位无符号整数（值会被裁剪）   |
| Int16Array        | 2          | short                   | int16_t                       | 16 位有符号整数（补码）        |
| Uint16Array       | 2          | unsigned short          | uint16_t                      | 16 位无符号整数                |
| Int32Array        | 4          | long                    | int32_t                       | 32 位有符号整数（补码）        |
| Uint32Array       | 4          | unsigned long           | uint32_t                      | 32 位无符号整数                |
| Float32Array      | 4          | unrestricted float      | float                         | 7 位有效数字，如 1.123456）    |
| Float64Array      | 8          | unrestricted double     | double                        | 16 位有效数字，如 1.123...15） |
| BigInt64Array     | 8          | bigint                  | int64_t (signed long long)    | 64 位有符号整数(补码)          |
| BigUint64Array    | 8          | bigint                  | uint64_t (unsigned long long) | 64 位无符号整数                |

注：特定类型取值范围的计算

- 二进制中位的状态数: 2,即 `[0,1]`
- 每个字节的位数: 8,即`[1][2][3][4][5][6][7][8]`
- 每字节的状态数: `2^8 => 256` ,记做 n
- 无符号整数的取值范围: [0, 256*n]
- 有符号整数的取值范围: [(256\*n)/2, 0, ((256\*n)/2)-1]
