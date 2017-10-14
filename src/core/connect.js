export default ({tpl, dataTpl, service}, cb) => {
    //找到组件需要到哪去和原始静态数据
    let {target, dataRow} = dataTpl;
    //组件初始化
    let tplRow = (typeof tpl == 'function') ? tpl(dataRow) : tpl;
    const render = (tar) => {
        target = (typeof tar == 'string') && (tar !== '') ? tar : target;
        console.log(target + ' component rendering');
        $(target).html(tplRow);
        console.log(target + ' component rended');
        //没有数据服务时也要执行渲染后方法
        !service && cb && (typeof cb == 'function') && cb(dataTpl);//传回上次的数据，可以根据用户的操作重新调用调用connect进行渲染
    };
    //将数据传送到模板
    const assign = () => {
        console.log(target + ' component rerender start');
        service((data) => {
            console.log('data rendering');
            //更新数据
            const option = $.extend({}, dataRow, data);
            tplRow = tpl(option);
            console.log('data rended');
            //页面局部更新
            render();
            console.log(target + ' component rerender end');
            cb && (typeof cb == 'function') && cb({target, dataRow: option});//传回上次的数据，可以根据用户的操作重新调用调用connect进行渲染
        });
    };
    //初次渲染
    render(target);
    service && assign();
}