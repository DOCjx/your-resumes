export default ({tpl, dataTpl, service}, cbBef, cbAft) => {
    //只有一个cb的时候默认传入的是cbAft
    const cb = !cbAft && cbBef ? cbBef : cbAft;
    //执行前置方法
    cb == cbAft && cbBef && (typeof cbBef == 'function') && cbBef();
    //找到组件需要到哪去和原始静态数据
    let {target, dataRow} = dataTpl;
    //组件初始化
    let tplRow = (typeof tpl == 'function') ? tpl(dataRow) : tpl;
    const render = (tar) => {
        target = (typeof tar == 'string') && (tar !== '') ? tar : target;
        $(target).html(tplRow);
        //没有数据服务时也要执行渲染后方法
        !service && cb && (typeof cb == 'function') && cb(dataTpl);//传回上次的数据，可以根据用户的操作重新调用调用connect进行渲染
    };
    //将数据传送到模板
    const assign = () => {
        service((data) => {
            //更新数据
            const option = $.extend({}, dataRow, data);
            tplRow = tpl(option);
            //页面局部更新
            render();
            cb && (typeof cb == 'function') && cb({target, dataRow: option});//传回上次的数据，可以根据用户的操作重新调用调用connect进行渲染
        });
    };
    //初次渲染
    render(target);
    service && assign();
}