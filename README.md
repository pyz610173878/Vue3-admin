
本仓库为Vue3-admin管理系统起步模板。针对公共基础路径、自定义路径别名、服务器选项、构建选项等做了**Vite**的基础配置。创建了通用的**规范目录**。减少了大部分重复任务的时间。

```
├── dist/
└── src/
    ├── api/                       // 接口请求目录
    ├── assets/                    // 静态资源目录
    ├── common/                    // 通用类库目录
    ├── components/                // 公共组件目录
    ├── router/                    // 路由配置目录
    ├── store/                     // 状态管理目录
    ├── style/                     // 通用样式目录
    ├── utils/                     // 工具函数目录
    ├── views/                     // 页面组件目录
    ├── App.vue
    ├── main.js
├── tests/                         // 单元测试目录
├── index.html
├── jsconfig.json                  // JavaScript 配置文件
├── vite.config.js                 // Vite 配置文件
└── package.json
```



# 内置依赖包

* ⚡️ **Vite 3**[2] - 构建工具（就是快！）
* 🖖 **Vue 3**[3] - 渐进式 JavaScript 框架
* 🚦 **Vue Router**[4] - 官方路由管理器
* 🔗 **Axios**[8] - 一个基于 promise 的网络请求库，可以用于浏览器和 node.js
* Element-plus
* 🎨 **Sass**[7] - CSS 预处理器

# install

```
cd learn-vue-admin

#npm 安装
npm install

#pnpm 安装
pnpm install

#运行项目
pnpm dev

#运行项目
#npm dev
```
