import app from 'app';
const {service, request, pubDt} = app;
export default (tpl) => {
    service(tpl, (res, rej) => {
        const nav = pubDt.getData('nav');
        // console.log('nav:', nav);
        if(nav){
            res({nav});
        }else{
            const req = {
                model: 'category',
            };
            request(req, (data) => {
                pubDt.setData('nav', data.data);
                res({nav: data.data});
            }, (data) => {
                rej(data);
            });
        }
    });
};