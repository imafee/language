import jsstd from "./js-std.js";

export default {
  text: "JavaScript",
  link: "/upl/js",
  collapsed: false,
  items: [
    {
      text: "Grammer",
      collapsed: true,
      items: [
        { text: "overview", link: "/upl/js/grammer/index" },
        {
          text: "declaration",
          link: "/upl/js/grammer/declaration",
        },
        {
          text: "expression",
          link: "/upl/js/grammer/expression",
        },
        {
          text: "statement",
          link: "/upl/js/grammer/statement",
        },
        { text: "module", link: "/upl/js/grammer/module" },
        { text: "strict", link: "/upl/js/grammer/strict" },
      ],
    },
    {
      text: "Structure",
      collapsed: true,
      items: [
        { text: "overview", link: "upl/js/structure" },
        {
          text: "element",
          link: "upl/js/structure/element",
        },
        {
          text: "declaration",
          link: "upl/js/structure/declaration",
        },
        {
          text: "segmentation",
          link: "upl/js/structure/segmentation",
        },
        {
          text: "organization",
          link: "upl/js/structure/organization",
        },
        {
          text: "programming                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ",
          link: "upl/js/structure/programming",
        },
        {
          text: "scope",
          link: "upl/js/structure/scope",
        },
        {
          text: "private",
          link: "upl/js/structure/private",
        },
      ],
    },
    {
      text: "Dynamic",
      collapsed: true,
      items: [
        { text: "overview", link: "upl/js/dynamic/overview" },
        {
          text: "转换为值类型",
          link: "upl/js/dynamic/typeConvertToPrimitive",
        },
        {
          text: "值类型之间转换",
          link: "upl/js/dynamic/typeConvertBetweenPrimitive",
        },
        {
          text: "对象和数组",
          link: "upl/js/dynamic/objectAndArray",
        },
        { text: "重写", link: "upl/js/dynamic/overWrite" },
        { text: "执行", link: "upl/js/dynamic/eval" },
        { text: "调用", link: "upl/js/dynamic/invoke" },
        { text: "通用执行环境", link: "upl/js/dynamic/execEnv" },
      ],
    },
    {
      text: "Parallel",
      collapsed: true,
      items: [
        { text: "overview 概况", link: "upl/js/parallel/overview" },
        { text: "promise 许诺", link: "upl/js/parallel/promise" },
        {
          text: "与其他语言特性的交集",
          link: "upl/js/parallel/xxxxxxx",
        },
        { text: "concurrency 并发", link: "upl/js/parallel/concurrency" },
        {
          text: "分布式网络环境并行",
          link: "upl/js/parallel/distributedNet",
        },
      ],
    },

    {
      text: "Paradigm",
      collapsed: true,
      items: [
        {
          text: "Functional 函数式",
          collapsed: true,
          items: [
            {
              text: "overview 概况",
              link: "upl/js/functional/overview/",
            },
            {
              text: "从运算式语言到函数式语言",
              link: "upl/js/functional/arithmeticToFunctional/",
            },
            {
              text: "function 函数",
              link: "upl/js/functional/function/",
            },
            {
              text: "functionBehavior 函数行为",
              link: "upl/js/functional/functionBehavior/",
            },
            {
              text: "closure 闭包",
              link: "upl/js/functional/closure/",
            },
          ],
        },
        {
          text: "ObjectOriented 面向对象",
          collapsed: true,
          items: [
            {
              text: "overview 概况",
              link: "upl/js/objectOriented/overview",
            },
            {
              text: "createInstance 创建实例",
              link: "upl/js/objectOriented/createInstance",
            },
            {
              text: "classInherit 类继承",
              link: "upl/js/objectOriented/classInherit",
            },
            {
              text: "member 对象成员",
              link: "upl/js/objectOriented/member",
            },
            {
              text: "self 对象自身",
              link: "upl/js/objectOriented/self",
            },
            {
              text: "symbol 符号",
              link: "upl/js/objectOriented/symbol",
            },
            {
              text: "protoInherit 原型继承",
              link: "upl/js/objectOriented/protoInherit",
            },
            {
              text: "objectSystem 对象系统",
              link: "upl/js/objectOriented/protoInherit",
            },
            {
              text: "customProps 定制对象属性",
              link: "upl/js/objectOriented/customProps",
            },
            {
              text: "others",
              link: "upl/js/objectOriented/others",
              items: [
                { text: "运行期侵入" },
                { text: "类类型与元类继承" },
                { text: "元编程模型" },
              ],
            },
          ],
        },
      ],
    },
    {
      text: "Build-in Objects",
      collapsed: true,
      items: jsstd,
    },
  ],
};
