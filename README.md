This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 项目构建（使用create-react-app 脚手架构建，并修改部分webapck配置）
1.npm i create-react-app -g

2.create-react-app ssx_react_recruit_webapp

3.cd ssx_react_recruit_webapp

4.git init

5.git add .

6.git commit -m 'Saving before ejecting'

7.npm run eject (开放react 封装的webpack 配置文件，以便修改)

8.npm start

9.后续可以再执行git push


##create-react-app构建项目遇到的坑：
1.保证网络：公司网络有自己的npm镜像，安装不了，于是改用自己手机的热点，就可以了。

2.npm run eject执行之前需要先把文件git commit一下，否则会报错。注意要保持网络没问题，再执行这个命令

3.一定按照上面的顺序来创建项目，否则有错

## 项目依赖包安装
1.React Redux （https://www.redux.org.cn/docs/basics/UsageWithReact.html）

npm install --save react-redux

2.React Redux （https://www.redux.org.cn/docs/basics/UsageWithReact.html）

npm install --save react-redux

3.React Redux （https://www.redux.org.cn/docs/basics/UsageWithReact.html）

npm install --save react-redux



## 项目介绍

- 项目是一个招聘类实时聊天功能webapp，前端使用react框架，redux做状态管理，react-router实现路由，axios异步请求，语言ES6，antd-mobile作为快速页面实现的组件库等；
后端使用node.js Express实现服务器，mongodb实现数据库等。

- 项目主体功能：注册->登录-完善信息->牛人与BOss列表->聊天列表->聊天->个人中心




## 使用技术栈
- 前端
react16

  redux

  react-redux

  redux-thunk

  react-router4

  prop-types

  axios

  browser-cookies

  antd-mobile

- 后端
  node
  express
  mongoose
  utility
  cookie-parser
  body-parser

## 项目目录
    .
    ├── README.md
    ├── config               // 开发环境的配置
    ├── public
    │   ├── index.html       // 项目页面入口文件
    ├── package.json         // 项目配置文件
    ├── scripts              // npm scrips 命令配置
    ├── server               // 后端配置
    │   ├── server.js        // 服务启动文件
    │   ├── model.js         // 数据库配置
    │   ├── user.js          // 接口配置
    ├── src
    │   ├── static           // 公用资源
    │   ├── components       // 所有组件
    │   ├── container        // 所有页面
    │   ├── redux            // redux管理
    │   ├── http.js	         // axios配置
    │   ├── index.js         // 入口文件
    │   ├── util.js          // 功能函数封装
    │   └── reducer.js       // 所有reducer合并
## 运行项目
- 环境依赖
  项目运行前须要安装NodeJs&MongoDB，Mongo端口为27017，express服务器端口9093，访问地址为：localhost
- 运行项目
  首先需要使用命令行工具CD到根目录，按顺序执行如下命令

  第一个窗口用于拉取依赖&启动服务器
  npm install //拉取依赖
  node server/server.js //启动服务

  第二个窗口用于启动MongoDB
  全局直接执行命令 Mongo

  第三个窗口用于启动项目
  npm run start
