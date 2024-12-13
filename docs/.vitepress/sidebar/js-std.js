export default [
  {
    text: "相关数据结构总结",
    link: "/upl/js-std/data-structure",
  },
  {
    text: "Value-Property(值属性)",
    collapsed: true,
    items: [
      { text: "globalThis" },
      { text: "Infinity" },
      { text: "NaN" },
      { text: "undefined" },
      { text: "null" },
    ],
  },
  {
    text: "Function-Property(函数属性)",
    collapsed: true,
    items: [
      { text: "eval" },
      { text: "isFinite" },
      { text: "isNaN" },
      { text: "parseInt" },
      { text: "parseFloat" },
      { text: "decodeURI" },
      { text: "encodeURI" },
      { text: "decodeURIComponent" },
      { text: "encodeURIComponent" },
    ],
  },
  {
    text: "Primitive-Types(原始值类型)",
    collapsed: true,
    items: [
      { text: "Boolean" },
      { text: "Number" },
      { text: "BigInt" },
      { text: "String", link: "/upl/js-std/String" },
      { text: "Symbol" },
    ],
  },
  {
    text: "Keyed-Collections(键值集合)",
    collapsed: true,
    items: [
      {
        text: "Object",
        link: "/upl/js-std/Object",
      },
      { text: "Map", link: "/upl/js-std/Map" },
      { text: "WeakMap" },
      { text: "Set" },
      { text: "WeakSet" },
    ],
  },
  {
    text: "Indexed-Collections(索引集合)",
    collapsed: true,
    items: [
      {
        text: "Array",
        link: "/upl/js-std/Array",
      },
      {
        text: "TypedArrays",
        link: "/upl/js-std/TypedArrays",
      },
    ],
  },
  {
    text: "Reflection(反射)",
    collapsed: true,
    items: [{ text: "Function" }, { text: "Reflect" }, { text: "Proxy" }],
  },
  {
    text: "Error(错误)",
    collapsed: true,
    items: [
      { text: "Error" },
      { text: "AggregateError" },
      { text: "EvalError" },
      { text: "InternalError" },
      { text: "RangeError" },
      { text: "ReferenceError" },
      { text: "SyntaxError" },
      { text: "TypeError" },
      { text: "URIError" },
    ],
  },
  {
    text: "Abstraction-Control(异步的抽象控制)",
    collapsed: true,
    items: [
      { text: "Iterator" },
      { text: "AsyncIterator" },
      { text: "Promise" },
      { text: "GeneratorFunction" },
      { text: "AsyncGeneratorFunction" },
      { text: "Generator" },
      { text: "AsyncGenerator" },
      { text: "AsyncFunction" },
    ],
  },
  {
    text: "Structured-Data(结构化的buff数据)",
    collapsed: true,
    items: [
      { text: "ArrayBuffer" },
      { text: "SharedArrayBuffer" },
      { text: "DataView" },
      { text: "Atomics" },
      { text: "JSON" },
    ],
  },
  {
    text: "Manage-Memory(内存管理对象)",
    collapsed: true,
    items: [
      { text: "WeakRef", collapsed: true },
      { text: "FinalizationRegistry", collapsed: true },
    ],
  },
  {
    text: "Misc(杂项)",
    collapsed: true,
    items: [
      { text: "Date" },
      { text: "Math" },
      { text: "RegExp" },
      { text: "Intl" },
    ],
  },
];
