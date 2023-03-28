export default {
  text: "Standrad Library",
  collapsed: false,
  items: [
    { text: "Undefined" },
    { text: "Null" },
    { text: "Boolean" },
    { text: "Symbol" },
    { text: "String" },
    { text: "Number" },
    { text: "BigInt" },

    {
      text: "Object",
      collapsed: false,
      link: "upl/javascript/stdlib/Object/",
      items: [
        {
          text: "constructor",
          link: "upl/javascript/stdlib/Object/constructor.md",
        },
        {
          text: "static property",
          link: "upl/javascript/stdlib/Object/static.md",
        },
        {
          text: "prototype property",
          link: "upl/javascript/stdlib/Object/prototype.md",
        },
      ],
    },
    {
      text: "Map",
      collapsed: true,
      items: [{ text: "Map" }, { text: "WeakMap" }],
    },
    {
      text: "Array(5)",
      collapsed: true,
      items: [
        { text: "Array" },
        { text: "Int*Array" },
        { text: "Unit*Array" },
        { text: "BigInt*Array" },
        { text: "Float*Array" },
      ],
    },
    {
      text: "Set",
      collapsed: true,
      items: [{ text: "Set" }, { text: "WeakSet" }],
    },
    { text: "Function" },
    { text: "Reflect" },
    { text: "Proxy" },
    { text: "Math" },
    { text: "Date" },
    { text: "RegExp" },
    { text: "Intl" },
    {
      text: "Error",
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
      text: "(async-control)",
      collapsed: true,
      items: [
        { text: "Promise" },
        { text: "GeneratorFunction" },
        {
          text: "AsyncGeneratorFunction",
        },
        { text: "Generator" },
        { text: "AsyncGenerator" },
        { text: "AsyncFunction" },
      ],
    },
    {
      text: "(structure)",
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
      text: "(memory)",
      collapsed: true,
      items: [
        { text: "WeakRef", collapsed: true },
        {
          text: "FinalizationRegistry",
          collapsed: true,
        },
      ],
    },
  ],
};
