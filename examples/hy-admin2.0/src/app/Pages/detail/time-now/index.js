import app from 'app';
import tpl from "./index.tpl";//模板引擎参考文档http://handlebarsjs.com/
import {action, CurentTime} from "./action.js";//用于向服务端发送请求返回数据
const {connect} = app;

//加载组件静态资源
const dataTpl = {
    target: '#timeNow',//jq中的选择器，组件添加的位置
    dataRow: {
        timeNow: CurentTime(),
    }
};
export default () => connect({tpl, dataTpl}, (data) => {
    //后续的js操作写在action中
    action({tpl, dataTpl: data});
});//传入页面模板，数据模板和数据服务。加载执行action和启动子组件。