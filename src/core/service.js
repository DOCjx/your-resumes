export default (tpl, cb) => {
    console.log('common service start');
    new Promise((res, rej) => {
        cb(res, rej);
    }).then((data) =>{
        tpl(data);
    }, (err) =>{
        console.log(err);
    });
    console.log('common service end');
}