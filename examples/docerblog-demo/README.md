# your-resumes
一个方便团队合作的高效率前端开发框架

## 特性

-   模块化开发，各个组件之间解耦，方便团队合作
-   使用时数据和页面模板分离，分别在`service.js`和`index.tpl`中。页面模板和js效果分离，分别在`index.tpl`和`action.js`
-   实现类似react的单向数据流，数据模板改变进行页面局部重新渲染
-   组件数据懒加载，遵循：无数据渲染-获取数据-有数据渲染
-   组件未启用时不进行渲染操作，提高渲染的性能
-   函数式编程提高代码阅读性和维护性
-   使用[handlebarsjs](http://handlebarsjs.com/)作为模板引擎，提高开发效率
-   使用jq和bootstrap提高开发效率
-   开发环境使用webpack自带的热更新和[nodemon](https://github.com/remy/nodemon#nodemon)检测webpack配置文件修改实现浏览器实时刷新
-   生产环境将所有样式文件合并到一个文件，第三方js库合并到一个文件，同时用插件对js带进行压缩
-   使用thinkphp5的RESTFull做接口

## 目录结构

```bash
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│    ├── /app/           # 业务代码
│    │    ├── /Common/               # 公共组件
│    │    │    ├── /nav/             #导航栏组件例子
│    │    │    │    ├── index.js     # 连接数据和模板
│    │    │    │    ├── index.tpl    # handlebars模板文件
│    │    │    │    ├── service.js   # 数据加载逻辑
│    │    │    │    └── style.less   # 组件的样式
│    │    │    ├── conf.js         # 页面的配置文件
│    │    │    ├── frameset.tpl    # app的HTML结构
│    │    │    ├── index.js        # 启用公共组件
│    │    │    └── ...             # 其它公共组件
│    │    ├── /Pages/                # 页面组件
│    │    │    ├── /detail/
│    │    │    │    ├── index.js     # 连接数据和模板
│    │    │    │    ├── index.tpl    # handlebars模板文件
│    │    │    │    ├── service.js   # 数据加载逻辑
│    │    │    │    └── style.less   # 组件的样式
│    │    │    ├── /list/
│    │    │    ├── index.js          # 对外暴露所有组件
│    │    │    └── ...               # 其它组件
│    │    ├── /Public/      # 页面的静态资源
│    │    └── index.js      # 框架入口文件
│    ├── /core/             # 框架核心实现方法
│    │    ├── /connect.js/  # 异步加载的数据和handlebars模板相连接
│    │    ├── /service.js/  # 数据异步加载实现
│    │    └── index.js      # 借助webpack别名向整个框架暴露接口
│    ├── /vendor/        # 第三方库
│    │    ├── /bootstrap-3.3.6/
│    │    └── /jquery.hash/
│    └── index.html      # 项目入口文件
├── .babelrc
├── .eslintrc
├── .webpack.config.js
├── .webpack.devconfig.js
└── package.json
```


## 博客线上地址
[www.wvwvw.cn](www.wvwvw.cn)