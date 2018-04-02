import '../../vendor/bootstrap-3.3.6/css/bootstrap.min.css';
import '../../vendor/reset/reset.css';
import '../Public/less/style.less';
import tpl from './frameset.tpl';
import config from './conf.js';
import nav from './nav/';
import banner from './banner/';
import footer from './footer/';
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
            }
        },
        {
            item: {
                tpl,
                dataTpl: {
                    target: '#app',

                }
            },
            cb(data) {//渲染后的操作

            }
    }];
    //app框架初始化,多组件渲染的情况
    for(let v of dataTpls){
        const {item, cb} = v;
        connect(item, cb);
    }
    nav();//启动组件
    footer();
};