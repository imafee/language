import { defineConfig } from "vitepress";
import jsSidebarConfig from "./config/sidebar/javascript";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "languages",
  description: "Let's learn these programming language.",
  base: "/languages/",
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
