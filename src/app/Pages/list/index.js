import tpl from "./index.tpl";//模板引擎参考文档http://handlebarsjs.com/
import './style.less';
import service from "./service.js";//用于向服务端发送请求返回数据
import app from 'app';
const {connect} = app;

//加载组件静态资源
const dataTpl = {
    target: 'section',//jq中的选择器，组件添加的位置
};
export default () => connect({tpl, dataTpl});//传入页面模板，数据模板和数据服务。加载执行action和启动子组件。