import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FEE-Langs",
  description: "Let's learn these programming language standards.",
  base: "/languages/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "UPL",
        items: [
          {
            text: "[JavaScript]",
            items: [
              {
                text: "Runtime",
                items: [
                  {
                    text: "nodejs",
                    items: [],
                  },
                  {
                    text: "browser",
                    items: [],
                  },
                ],
              },
              {
                text: "Language Feature",
                items: [
                  { text: "Grammer" },
                  { text: "Structure" },
                  { text: "Dynamic" },
                  { text: "Parallel" },
                ],
              },
              {
                text: "Language Paradigm",
                items: [
                  { text: "Functional" },
                  {
                    text: "ObjectOriented",
                    items: [],
                  },
                ],
              },
              {
                text: "Standrad Library",
                items: [
                  {
                    text: "primitive type",
                    items: [
                      { text: "Undefined" },
                      { text: "Null" },
                      { text: "String", items: [] },
                      { text: "Number", items: [] },
                      { text: "Boolean" },
                      { text: "Symbol" },
                    ],
                  },
                  { text: "Object", items: [] },
                  {
                    text: "Error",
                    items: [
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
                  { text: "Array", items: [] },
                  { text: "Functional", items: [] },
                  { text: "...", items: [] },
                ],
              },
            ],
          },
          { text: "[WebAssembly]", items: [] },
          { text: "[CLang]", items: [] },
          { text: "[TypeScript]", items: [] },
          { text: "[Rust]", items: [] },
        ],
      },
      {
        text: "DSL",
        items: [
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
      },
      {
        text: "Proto",
        items: [
          { text: "HTTP", items: [] },
          { text: "TCP", items: [] },
          { text: "UDP", items: [] },
          { text: "ICMP", items: [] },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/imafee/languages" },
    ],
  },
});
