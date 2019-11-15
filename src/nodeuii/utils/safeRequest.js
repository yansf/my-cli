const fetch = require("node-fetch");

class SafeRequest {
    constructor (url,options){
        this.url = url;
        this.options = options;
    }
    fetch(){
        return new Promise((resolve,reject)=>{
            fetch(this.url)
            .then((res)=>{
                
                try{
                    resolve(res.json());
                }catch(error){
                    let result = {code: 0,message: '请求失败'}
                    result.code = 1;
                    result.message = "解析JSON失败";
                    reject(result)
                }
            })
            .catch((error)=>{
                result.code = 2;
                result.message = "API出错";
            });
        })
    }
}