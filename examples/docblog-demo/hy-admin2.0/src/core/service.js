export default (tpl, cb) => {
    new Promise((res, rej) => {
        cb(res, rej);
    }).then((data) =>{
        tpl(data);
    }, (err) =>{
        console.log(err);
    });
}