import app from 'app';
const {connect} = app;
export const CurentTime = () => {
        const now = new Date();

        const year = now.getFullYear();       //年
        const month = now.getMonth() + 1;     //月
        const day = now.getDate();            //日

        const hh = now.getHours();            //时
        const mm = now.getMinutes();          //分
        const ss = now.getSeconds();           //秒

        let clock = year + "-";

        if(month < 10)
            clock += "0";

        clock += month + "-";

        if(day < 10)
            clock += "0";

        clock += day + " ";

        if(hh < 10)
            clock += "0";

        clock += hh + ":";
        if (mm < 10) clock += '0';
        clock += mm + ":";

        if (ss < 10) clock += '0';
        clock += ss;
        return(clock);
};
export const action = ({tpl, dataTpl}) => {

    let time = setInterval(() => {
        const {target, dataRow} = dataTpl;
        dataRow.timeNow = CurentTime();
        connect({
            tpl,
            dataTpl: {
                target,
                dataRow
            }
        });
        //选择是否不在本页面时停止当前组件
        const module = $.hash().get('m');
        if(module && module != 'detail') clearInterval(time);
    }, 1000);
};