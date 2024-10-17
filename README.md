# language book

## usage:

```shell
git clone <thisrepo> # clone to your computer
npm i # Install dependencies
npm run docs:dev # Edit document
npm run docs:build # Pack document
npm run docs:preview # View document in dist folder
npn run test # Execute all test files
```

本项目使用 ESM 模块化方案和实验性的运行时环境

```jsonc
{
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  }
}
// 注意：Commanjs 和 EMS 两个环境下执行`jest`会有明显的差异。
```
