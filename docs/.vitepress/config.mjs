import { defineConfig } from "vitepress";
import sidebar from "./sidebar/index.js";
// import baidu from "./head.baidu.js";
import pkg from "../../package.json";

const { license, author, config } = pkg;
const { title, description, repourl } = config.vitepress;

export default defineConfig({
  title, // 网站标题
  description, // 网站描述
  base: "/language/", // 路由前缀
  srcDir: ".", //docs与.vitepress文件夹的关系
  cleanUrls: true,
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "./assets/favicon-16x16.png",
      },
    ],
    //   ["script", {}, baidu],
  ],
  markdown: {
    // math: true,
    image: {
      lazyLoading: true,
    },
  },
  // rewrites: {
  //   "upl/js-std/Object.md": "upl/js-std/object.md",
  //   "upl/js-std/Map.md": "upl/js-std/map.md",
  // },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: `${repourl}/edit/main/:path`,
      text: `Edit this page`,
    },
    footer: {
      message: `Released under the ${license} License.`,
      copyright: `Copyright © 2020-${new Date().getFullYear()}-${author.name}`,
    },
    lastUpdated: false,
    nav: [
      { text: "UPL", link: "/upl/" },
      { text: "DSL", link: "/dsl/" },
      { text: "Protocol", link: "/protocol/" },
    ],
    outline: "deep",
    sidebar,
    socialLinks: [{ icon: "github", link: repourl }],
    search: {
      provider: "local",
    },
  },
});
