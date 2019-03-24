This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 项目构建（使用create-react-app 脚手架构建，并修改部分webapck配置）
1.npm i create-react-app -g

2.create-react-app ssx_react_recruit_webapp

3.cd ssx_react_recruit_webapp

4.git init

5.git add .

6.git commit -m 'Saving before ejecting'

7.npm run eject (开放react 封装的webpack 配置文件，以便修改)

8.npm install (npm run eject 后需要在npm install一下)

9.npm start

10.后续可以再执行git push


##create-react-app构建项目遇到的坑：
1.保证网络：公司网络有自己的npm镜像，安装不了，于是改用自己手机的热点，就可以了。

2.npm run eject执行之前需要先把文件git commit一下，否则会报错。注意要保持网络没问题，再执行这个命令

3.一定按照上面的顺序来创建项目，否则有错

## 项目依赖包安装
1.React Redux （https://www.redux.org.cn/docs/basics/UsageWithReact.html）

npm install --save redux
npm install --save react-redux (react-redux 是为了react中更好使用redux开发的，理解参考http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html )

npm install redux-thunk --save (Redux默认只处理同步，异步任务需要react-thunk中间件)

npm install redux-devtools-extension --save (Redux调试工具)

npm install babel-plugin-transform-decorators-legacy --save-dev (优化redux,需要用到一些装饰器，比如@connect.需要这个插件)

2.Express (http://www.expressjs.com.cn/)

npm install express --save

3.nodemon （监听路由和响应内容，安装后nodemon server.js；server.js修改的时候，会自动刷新内容，不需要每次都node server.js）

npm install nodemon -g

4.mongoose (mongoose 就是连接express 和mongodb的)
npm install mongoose --save

5.antd-mobile 组件库 (https://mobile.ant.design/docs/react/introduce-cn)，该组件库兼容web和ReactNative
npm install antd-mobile@next --save

6.npm install babel-plugin-import --save-dev (按需加载组件),然后配置按官网说明配置pakage.json

7.	npm install react-router-dom --save  (使用呢react 路由)

8. axios （基于promise封装的ajax请求,https://www.npmjs.com/package/axios）

npm install axios --save (安装完配置pakage.json)

9.cookie

npm install cookie-parser --save (cookie-parser是Express的中间件，用来实现cookie的解析，是官方脚手架内置的中间件之一。)

npm install browser-cookies --save(browser-cookies 一个管理cookies的插件,封装了操作cookie的方法)

10.Socket.io 实现实时通信，因为聊天是需要实时通信的（Socket.io是实现websocket协议的一个库）

npm install socket.io --save （express使用）

npm install socket.io-client --save　（前端使用）

11.body-parser （Express框架使用body-parser作为请求体解析中间件）
npm install body-parser


12. utility （密码加密）
npm install utility --save

13.prop-types (PropTypes提供了多种验证器,react15.5之前是封装在react中的，react16之后分离出来，需要另外安装)

npm install prop-types --save



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
    │   ├── components       // 基础组件
    │   ├── container        // 页面组件
    │   ├── redux            // redux管理
    │   ├── http.js	         // axios配置
    │   ├── index.js         // 入口文件
    │   ├── util.js          // 功能函数封装
    │   └── reducer.js       // 所有reducer合并
## 运行项目
- 环境依赖
  项目运行前须要安装NodeJs&MongoDB，Mongo端口为27017，express服务器端口3001，访问地址为：localhost
- 运行项目
  首先需要使用命令行工具CD到根目录，按顺序执行如下命令

  第一个窗口用于拉取依赖&启动服务器
  npm install //拉取依赖
  node server/server.js //启动服务

  第二个窗口用于启动MongoDB
  全局直接执行命令 Mongo

  第三个窗口用于启动项目
  npm run start


## 收获
1.使用ES6写法，主要是class实现组件，let,字符串模板，箭头函数，解构，模块等

2.使用基于node.js的Express框架实现web接口，mongoose连接mongodb

3.react 组件化开发的思想

4.组件内部状态用setState

5.组件间传递数据和方法用 props

6.使用高阶组件优化项目代码 (sumit-form.js)

7.redux 状态管理在react中的使用

8.websocket 实现实时聊天



