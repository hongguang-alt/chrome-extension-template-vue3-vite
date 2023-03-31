<div align="center">

<h1> Chrome Extension Template with<br/>Vue3 + Vite + TypeScript</h1>

![](https://badges.aleen42.com/src/vue.svg)
![](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![](https://badges.aleen42.com/src/vitejs.svg)

> 基于 vue3 + vite + TS 的一个 chrome extension 开发模板

</div>

### 目录
- [特性](#特性)
- [用法](#用法)
- [困惑和TODO](#困惑和TODO)

### 特性
- vue3
- typescript
- less

### 用法
```js
// 开发
pnpm run dev

// 打包
pnpm run build
```
在 chrome 插件中打开开发者模式，然后将这个项目打包的dist目录导入进去

### 困惑和TODO

#### 其实我在想另一件事情，vite 使用 build 不也是 Bundle 方式么，那还不如使用 webpack 呢，何必使用 rollup ？

#### TOTO
- [] 实现热更新
- [] 支持注入css