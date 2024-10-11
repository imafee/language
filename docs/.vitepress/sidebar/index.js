import javascript from "./javascript.js";
import dsl from "./dsl.js";
import protocol from "./protocol.js";

export default {
  "/upl/": [
    { text: "Clang", items: [] },
    { text: "Rust", items: [] },
    javascript,
    { text: "TypeScript", items: [] },
  ],
  "/dsl/": dsl,
  "/protocol/": protocol,
};
