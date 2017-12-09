import {common} from '../app/Common/';
export default ({baseUrl, model, data, type='read', id}, cb) => {
    //type支持RESTFull的index,create,save,read,edit,update,delete
    if(~'index,create,save,read,edit,update,delete'.indexOf(type) == 0){
        cb({info: '请求方式非法！'});
        return;
    }
    //请求方式
    const mets = {
        update: 'PUT',
        delete: 'DELETE'
    };
    let method = mets[type] ? mets[type] : 'POST';
    if(~'index,create,read,edit'.indexOf(type) != 0){
        method = 'GET';
    };

    //请求地址
    if(typeof baseUrl == 'undefined'){
        baseUrl = common.config.serverBaseUrl;
    };
    let url = baseUrl + '/' + model;
    if(~'read,edit,update,delete'.indexOf(type) != 0){
        url += '/' + id;
    };
    if(type == 'edit'){
        url += '/edit';
    }else if(type == 'create'){
        url += '/create';
    };

    //发送请求
    $.ajax({
        method,
        url,
        data,
        success: cb,
        error: cb
    });
}