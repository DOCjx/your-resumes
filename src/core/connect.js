export default ({tpl, dataTpl, service}, cb) => {
    //找到组件需要到哪去
    let {target} = dataTpl;
    //组件初始化
    let tplRow = (typeof tpl == 'function') ? tpl(dataTpl) : tpl;
    const render = (tar) => {
        target = (typeof tar == 'string') && (tar !== '') ? tar : target;
        console.log(target + ' component rendering');
        $(target).html(tplRow);
        console.log(target + ' component rended');
        //没有数据服务时也要执行渲染后方法
        !service && cb && (typeof cb == 'function') && cb();
    };
    //将数据传送到模板
    const assign = () => {
        console.log(target + ' component rerender start');
        service((data) => {
            console.log('data rendering');
            //更新数据
            const option = $.extend({}, dataTpl, data);
            tplRow = tpl(option);
            console.log('data rended');
            //页面局部更新
            render();
            console.log(target + ' component rerender end');
            cb && (typeof cb == 'function') && cb();
        });
    };
    //初次渲染
    render(target);
    service && assign();
}