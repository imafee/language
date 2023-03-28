import stdlibConfig from "./javascript.stdlib";

export default {
  text: "JavaScript",
  collapsed: false,
  items: [
    stdlibConfig,
    {
      text: "Runtime",
      items: [
        {
          text: "Data Structure",
          link: "/upl/javascript/runtime/",
        },
        {
          text: "Value properties",
        },
        {
          text: "Function properties",
        },
      ],
    },
    {
      text: "Language Feature",
      items: [
        { text: "Grammer", collapsed: true, items: [] },
        { text: "Structure", collapsed: true, items: [] },
        { text: "Dynamic", collapsed: true, items: [] },
        { text: "Parallel", collapsed: true, items: [] },
      ],
    },
    {
      text: "Language Paradigm",
      items: [
        { text: "Functional", collapsed: true, items: [] },
        {
          text: "ObjectOriented",
          collapsed: true,
          items: [],
        },
      ],
    },
  ],
};
