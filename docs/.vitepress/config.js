import { defineConfig } from "vitepress";
import jsSidebarConfig from "./config/sidebar/javascript";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "languages",
  description: "Let's learn these programming language.",
  base: "/languages/",
  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2023-present imafee",
  },
  head: [
    [
      "script",
      {},
      `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?3e4d7bac52542136df96a8e4617fdcc9";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`,
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: {
      "/upl/": [
        jsSidebarConfig,
        { text: "TypeScript", items: [] },
        { text: "WebAssembly", items: [] },
        { text: "CLang", items: [] },
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
        { text: "prompt", items: [] },
      ],
      "/proto/": [
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
