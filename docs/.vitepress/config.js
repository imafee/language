import { defineConfig } from "vitepress";
import baidu from "./config/head.baidu";
import jsConfig from "./config/sidebar/javascript";
import jsObjects from "./config/sidebar/jsObjects";

// 参考 https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "《Language》",
  description: "Let's learn programming language in the world!",
  base: "/language/",
  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2023-present imafee@163.com",
  },
  head: [["script", {}, baidu]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "UPL", link: "/upl/" },
      { text: "DSL", link: "/dsl/" },
      { text: "PROTOCOL", link: "/proto/" },
    ],
    sidebar: {
      "/upl/": [
        jsConfig,
        jsObjects,
        { text: "TypeScript", items: [] },
        { text: "WebAssembly", items: [] },
        { text: "Clang", items: [] },
        { text: "Rust", items: [] },
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
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/imafee/languages" },
    ],
  },
});
