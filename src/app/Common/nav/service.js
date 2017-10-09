import app from 'app';
const {service} = app;
export default (tpl) => {
    console.log('nav service start');
    service(tpl, (res, rej) => {
        console.log('data geting');
        setTimeout(() => {
            console.log('data got');
            res({//异步请求成功回来的数据
                say_hello: "Drop down"
            });
        }, 3000);
    });
    console.log('nav service end');
};