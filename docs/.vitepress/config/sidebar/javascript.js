export default {
  text: "JavaScript",
  collapsed: false,
  items: [
    {
      text: "Grammer",
      collapsed: true,
      items: [
        { text: "overview 概况", link: "upl/javascript/grammer/overview/" },
        {
          text: "declaration 声明",
          link: "upl/javascript/grammer/declaration/",
        },
        {
          text: "expression 表达式",
          link: "upl/javascript/grammer/expression/",
        },
        {
          text: "statement 语句",
          link: "upl/javascript/grammer/statement/",
        },
        { text: "module 模块", link: "upl/javascript/grammer/module/" },
        { text: "strict 严格模式", link: "upl/javascript/grammer/strict/" },
        {
          text: "operator 运算符",
          link: "upl/javascript/grammer/operator/",
        },
      ],
    },
    {
      text: "Feature",
      collapsed: false,
      items: [
        {
          text: "Structure",
          collapsed: true,
          items: [
            { text: "overview", link: "upl/javascript/structure/overview/" },
            {
              text: "basicElm 基本组织元素",
              link: "upl/javascript/structure/basicElm/",
            },
            {
              text: "declaration 声明",
              link: "upl/javascript/structure/declaration/",
            },
            {
              text: "codeBlock 语句和代码分块",
              link: "upl/javascript/structure/codeBlocking/",
            },
            {
              text: "organizeBlock 组织形式分块的方法",
              link: "upl/javascript/structure/organizeBlock/",
            },
            {
              text: "programStructure 层次结构程序设计",
              link: "upl/javascript/structure/programStructure/",
            },
            {
              text: "variableScope 变量作用域",
              link: "upl/javascript/structure/variableScope/",
            },
            {
              text: "privateProps 私有属性和字段",
              link: "upl/javascript/structure/privateProps/",
            },
          ],
        },
        {
          text: "Dynamic",
          collapsed: true,
          items: [
            { text: "overview", link: "upl/javascript/dynamic/overview" },
            {
              text: "转换为值类型",
              link: "upl/javascript/dynamic/typeConvertToPrimitive",
            },
            {
              text: "值类型之间转换",
              link: "upl/javascript/dynamic/typeConvertBetweenPrimitive",
            },
            {
              text: "对象和数组",
              link: "upl/javascript/dynamic/objectAndArray",
            },
            { text: "重写", link: "upl/javascript/dynamic/overWrite" },
            { text: "执行", link: "upl/javascript/dynamic/eval" },
            { text: "调用", link: "upl/javascript/dynamic/invoke" },
            { text: "通用执行环境", link: "upl/javascript/dynamic/execEnv" },
          ],
        },
        {
          text: "Parallel",
          collapsed: true,
          items: [
            { text: "overview", link: "upl/javascript/parallel/overview" },
            { text: "promise", link: "upl/javascript/parallel/promise" },
            {
              text: "与其他语言特性的交集",
              link: "upl/javascript/parallel/xxxxxxx",
            },
            { text: "并发", link: "upl/javascript/parallel/concurrency" },
            {
              text: "分布式网络环境并行",
              link: "upl/javascript/parallel/distributedNet",
            },
          ],
        },
      ],
    },
    {
      text: "Paradigm",
      collapsed: false,
      items: [
        {
          text: "Functional",
          collapsed: true,
          items: [
            {
              text: "overview",
              link: "upl/javascript/functional/overview/",
            },
            {
              text: "从运算式语言到函数式语言",
              link: "upl/javascript/functional/arithmeticToFunctional/",
            },
            {
              text: "function 函数",
              link: "upl/javascript/functional/function/",
            },
            {
              text: "functionBehavior 函数行为",
              link: "upl/javascript/functional/functionBehavior/",
            },
            {
              text: "closure 闭包",
              link: "upl/javascript/functional/closure/",
            },
          ],
        },
        {
          text: "ObjectOriented",
          collapsed: true,
          items: [
            {
              text: "overview 概况",
              link: "upl/javascript/objectOriented/overview",
            },
            {
              text: "createInstance 创建实例",
              link: "upl/javascript/objectOriented/createInstance",
            },
            {
              text: "classInherit 类继承",
              link: "upl/javascript/objectOriented/classInherit",
            },
            {
              text: "member 对象成员",
              link: "upl/javascript/objectOriented/member",
            },
            {
              text: "self 对象自身",
              link: "upl/javascript/objectOriented/self",
            },
            {
              text: "symbol 符号",
              link: "upl/javascript/objectOriented/symbol",
            },
            {
              text: "protoInherit 原型继承",
              link: "upl/javascript/objectOriented/protoInherit",
            },
            {
              text: "objectSystem 对象系统",
              link: "upl/javascript/objectOriented/protoInherit",
            },
            {
              text: "customProps 定制对象属性",
              link: "upl/javascript/objectOriented/customProps",
            },
            {
              text: "others",
              link: "upl/javascript/objectOriented/others",
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
  ],
};
