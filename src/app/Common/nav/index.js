import tpl from "./index.tpl";//模板引擎参考文档http://handlebarsjs.com/
import './style.less';
import service from "./service.js";//用于向服务端发送请求返回数据
import app from 'app';
const {connect} = app;

//加载组件静态资源
const brandImg = require('../../Public/imgs/picture.jpg');
const dataTpl = {
    target: 'header',//jq中的选择器，组件添加的位置
    dataRow: {
        urls: {
            brandImg
        }
    }

};
export default () => connect({tpl, dataTpl, service}, (data) => {
    //加载执行action和启动子组件。
    console.log('action after '+ dataTpl.target + ' rended');
    console.log('dataLast: ', data);
});//传入页面模板，数据模板和数据服务。