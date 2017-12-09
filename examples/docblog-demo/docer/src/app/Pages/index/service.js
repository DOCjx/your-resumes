import app from 'app';
const {service, request, pubDt} = app;
export default (tpl) => {
    service(tpl, (res, rej) => {
        request({model: 'detail'}, (detail) => {
            detail = detail.data;
            const nav = pubDt.getData('nav');
            if(nav){
                const list = nav.slice(1);
                $.each(list, function(i, item){
                    list[i]['flag'] = i % 2 == 0;
                    list[i]['pic'] = require('../../Public/imgs/' + list[i]['pic']);
                });
                res({nav: list, hot: detail['hot'], new: detail['new']});
            }else{
                const req = {
                    model: 'category'
                };
                request(req, (data) => {
                    const nav = data.data;
                    pubDt.setData('nav', nav);
                    const list = nav.slice(1);
                    $.each(list, function(i, item){
                        list[i]['flag'] = i % 2 == 0;
                        list[i]['pic'] = require('../../Public/imgs/' + list[i]['pic']);
                    });
                    res({nav: list, hot: detail['hot'], new: detail['new']});
                }, (data) => {
                    rej(data);
                });
            }
        }, (data) => {
            rej(data);
        });
    });
};