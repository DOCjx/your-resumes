import app from 'app';
const {service, request} = app;
export default (tpl) => {
    service(tpl, (res, rej) => {
        //type支持RESTFull的index,create,save,read,edit,update,delete
        const req = {
            model: 'user',
            data: {age: 13},
            id: 2
        };
        request(req, (data) => {
            console.log(data);
            res(data);
        });
    });
};