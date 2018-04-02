import app from 'app';
import {I} from 'utils';
const {connect, service, request, pubDt} = app;
export default (tpl) => {
    service(tpl, (res, rej) => {
        const id = I('id');
        request({model: 'detail', type: 'read', id}, (article) => {
            console.log(article);
            res(article.data);
        }, (data) => {
            rej(data);
        });
    });
};