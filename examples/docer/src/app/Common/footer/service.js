import app from 'app';
const {service} = app;
export default (tpl) => {
    service(tpl, (res, rej) => {
        setTimeout(() => {
            res({//异步请求成功回来的数据
                say_hello: "Drop down"
            });
        }, 3000);
    });
};