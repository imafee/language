import javascript from "./javascript.js";
import jsLib from "./js-lib.js";

export default {
  "/upl/": [
    javascript,
    { text: "TypeScript", items: [] },
    { text: "WebAssembly", items: [] },
    { text: "Rust", items: [] },
    { text: "Clang", items: [] },
  ],

  "/dsl/": [
    {
      text: "bnf",
      items: [],
    },
    {
      text: "uml",
      items: [],
    },
    {
      text: "xml",
      items: [],
    },
    {
      text: "html",
      items: [],
    },
    {
      text: "css",
      items: [],
    },
    {
      text: "markdown",
      items: [],
    },
    {
      text: "shell",
      items: [],
    },
    {
      text: "glob",
      items: [],
    },
    {
      text: "regexp",
      items: [],
    },
    {
      text: "json",
      items: [],
    },
    {
      text: "yaml",
      items: [],
    },
    {
      text: "toml",
      items: [],
    },
    {
      text: "latex",
      items: [],
    },
    {
      text: "cron",
      items: [],
    },
    {
      text: "lambda",
      items: [],
    },
    {
      text: "drools",
      items: [],
    },

    {
      text: "sql",
      items: [],
    },
    {
      text: "graphQl",
      items: [],
    },
    {
      text: "restful",
      items: [],
    },
  ],
  "/protocol/": [
    { text: "TCP", items: [] },
    { text: "UDP", items: [] },
    { text: "HTTP", items: [] },
    { text: "ICMP", items: [] },
  ],
  "/lib/": [jsLib],
};
