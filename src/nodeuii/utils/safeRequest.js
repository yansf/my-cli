const fetch = require("node-fetch");
const config = require('../config');

class SafeRequest {
    constructor (url,options){
        this.url = url;
        this.options = options;
    }
    fetch(){
        let result = {
            code: 0,
            data:null
        }
        return new Promise((resolve,reject)=>{
            fetch(config.baceUrl + this.url)
            // .then((res)=>{
            //     try{
            //         res.json();
            //         resolve(res);
            //     }catch(error){
            //         let result = {code: 0,message: '请求失败'}
            //         result.code = 1;
            //         result.message = "解析JSON失败";
            //         reject(result)
            //     }
            // })
            .then(res => res.json())
            .then(json=>{
                result.data = json;
                resolve(result);
            })
            .catch((error)=>{
                console.log(123)
                result.code = 2;
                result.message = "API出错";
                reject(result);
            });
        });
    }
}

module.exports = SafeRequest;