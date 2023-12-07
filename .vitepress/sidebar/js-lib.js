export default {
  text: "JS Object",
  collapsed: false,
  items: [
    {
      text: "Value-Property",
      collapsed: true,
      items: [
        { text: "globalThis" },
        { text: "Infinity" },
        { text: "NaN" },
        { text: "undefined" },
      ],
    },
    {
      text: "Function-Property",
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
      text: "Primitive-Types",
      collapsed: true,
      items: [
        { text: "Undefined" },
        { text: "Null" },
        { text: "Boolean" },
        { text: "Number" },
        { text: "BigInt" },
        { text: "String" },
        { text: "Symbol" },
      ],
    },

    {
      text: "Keyed-Collections",
      collapsed: false,
      items: [
        {
          text: "Object",
          link: "/lib/js/Object/index.md",
        },
        { text: "Map" },
        { text: "WeakMap" },
        { text: "Set" },
        { text: "WeakSet" },
      ],
    },
    {
      text: "Indexed-Collections",
      collapsed: true,
      items: [
        {
          text: "Array",
          collapsed: true,
          items: [],
        },
        { text: "Int*Array" },
        { text: "Unit*Array" },
        { text: "BigInt*Array" },
        { text: "Float*Array" },
      ],
    },
    {
      text: "Reflection",
      collapsed: true,
      items: [{ text: "Function" }, { text: "Reflect" }, { text: "Proxy" }],
    },
    {
      text: "Misc.",
      collapsed: true,
      items: [
        { text: "Date" },
        { text: "Math" },
        { text: "RegExp" },
        { text: "Intl" },
      ],
    },
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
      text: "Abstraction-Control",
      collapsed: true,
      items: [
        { text: "Iterator" },
        { text: "AsyncIterator" },
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
      text: "Structured-Data",
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
      text: "Manage-Memory",
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
