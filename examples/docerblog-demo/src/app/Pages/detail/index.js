import app from 'app';
import tpl from "./index.tpl";//模板引擎参考文档http://handlebarsjs.com/
import './style.less';
import service from "./service.js";//用于向服务端发送请求返回数据
import action from "./action.js";
import banner from "../../Common/banner/";
const {connect} = app;

//加载组件静态资源
const dataTpl = {
    target: '#main',//jq中的选择器，组件添加的位置
};
export default () => connect({tpl, dataTpl, service}, () => {
    banner(false);
}, (data) => {
    connect({tpl: data.dataRow.content, dataTpl: {target: '.article-con'}});
});