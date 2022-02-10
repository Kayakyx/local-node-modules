# 使用 npm 本地模块构建模块化应用程序


[使用 npm 本地模块构建模块化应用程序](https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc)

[将公用实用工具封装成 npm 包](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/wraputilities.chinese.md)

## 使用

`local_modules` 下用于存放 本地 `npm` 包

以本地 `npm` 包 `foo` 为例

安装
```shell
npm install --save ./local_modules/foo
```

更新
```shell
npm update foo
```
