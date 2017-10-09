import '../../vendor/bootstrap-3.3.6/css/bootstrap.min.css';
import '../Public/less/style.less';
import tpl from './frameset.tpl';
import config from './conf.js';
import nav from './nav/';
import app from 'app';
const {connect} = app;

export const common = {
    config
};
export const render = () => {
    const dataTpls = [{
            item: {
                tpl: config.TITLE,
                dataTpl: {
                    target: 'title'
                }
            },
            cb() {//渲染后的操作
                console.log(dataTpls[0].item.dataTpl.target + ' action after render');
            }
        },
        {
            item: {
                tpl,
                dataTpl: {
                    target: '#app'
                }
            }
    }];
    //app框架初始化,多组件渲染的情况
    for(let v of dataTpls){
        const {item, cb} = v;
        connect(item, cb);
    }
    // connect();
    nav();//启动组件
};
export default {
    common,
    render
};