# 快速开始

## 项目介绍

本项目是一个基于 `React`的多包管理应用。它使用现代化的前端技术栈,旨在提供高效的开发体验和优秀的用户体验。

### 代码地址

`前端代码地址`：https://github.com/xxx

`后端代码地址`：https://github.com/xxx

### 主要特性

#### 前端部分
- 基于 Node.js 的现代化前端开发环境
- 整个工程采用 monorepo 的管理方式，便于多包协同开发和版本控制
- 使用 pnpm 作为包管理器，显著提高依赖安装速度和磁盘空间利用率
- 支持快速开发和构建，优化了开发工作流程
- 采用 TypeScript 作为主要开发语言，提供强类型支持，增强代码可维护性
- 集成了现代化的前端框架（如 React），用于构建高效、响应式的用户界面
- 使用 ESLint 和 Prettier 进行代码质量控制和格式化，确保一致的代码风格
- 集成了现代化的构建工具（Vite），优化资源加载和构建性能
- 实现了代码分割和懒加载，优化应用性能

#### 后端部分
 - xxx


## 开发环境

请确保您的本地环境满足以下要求:

- nodejs: `>=18.0.0`
- pnpm: `>=7.0.0`

## 安装

选择您喜欢的包管理器进行安装:

::: code-group

```sh [pnpm]
$ pnpm install
```

```sh [npm]
$ npm install
```

```sh [yarn]
$ yarn
```

:::

::: details 加快安装速度
推荐使用 `pnpm` 进行安装，并使用 nrm 作为镜像管理工具来提高下载速度:

```bash
# pnpm 安装
npm i pnpm -g

# nrm 安装
pnpm i nrm -g

# 使用淘宝镜像源
nrm use taobao

# 然后再进行依赖安装
pnpm install
```

:::

## 运行

安装完依赖后,使用以下命令启动开发服务器:

::: code-group

```sh [pnpm]
$ pnpm start
```

```sh [npm]
$ npm start
```

```sh [yarn]
$ yarn start
```

:::

启动成功后,您应该能在控制台看到相关的输出信息,包括应用运行的本地地址(通常是 `http://localhost:8888` 或类似地址)。

## 构建

当您准备将应用部署到生产环境时,使用以下命令构建项目:

::: code-group

```sh [pnpm]
$ pnpm build
```

```sh [npm]
$ npm run build
```

```sh [yarn]
$ yarn build
```

:::

构建完成后,您可以在 `packages/editor/dist` 目录(具体取决于项目配置)找到构建后的文件。

## 贡献

我们欢迎任何形式的贡献!如果您发现了 bug 或有新的功能建议,请创建一个 issue 或提交一个 pull request。
