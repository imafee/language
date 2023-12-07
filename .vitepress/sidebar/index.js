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
      text: "sql",
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
      text: "bnf",
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
