import {common, render} from './Common/';
import pages from './Pages/';
import {I} from 'utils';
const {config} = common;

const m = I('m');
//页面初始化
render();
//路由跳转
let module = pages.hasOwnProperty(m) ? m : config.M;;
pages[module]();
$.hash().listen((e) => {
    if(!pages.hasOwnProperty(e.m)) return;
    pages[e.m]();
});
//引入缓存机制
//写代码只是简单描述
//模板引擎
