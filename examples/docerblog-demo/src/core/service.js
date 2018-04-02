export const service = (tpl, cb) => {
    new Promise((res, rej) => {
        cb(res, rej);
    }).then((data) =>{
        tpl(data);
    }, (err) =>{
        console.log(err.statusText);
    });
};
export const pubDt = {
    sessionStorage: window.sessionStorage,
    setData(k, v){
        this.sessionStorage && this.sessionStorage.setItem(k, JSON.stringify(v));
    },
    getData(k){
        const res = this.sessionStorage && this.sessionStorage.getItem(k);
        return JSON.parse(res);
    }
};
export default {
    service,
    pubDt
}