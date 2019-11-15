const {
    join
}=require("path");

const _ = require('lodash');

let config = {
    "viewDir": join(__dirname,"../../webapp/views"),
    "staticDir": join(__dirname,"../../webapp/assets")
}

if(process.env.NODE_ENV == "development"){
    const localConfig = {
        baceUrl: '',
        port: "3000"
    }
    config = _.extend(config,localConfig)
}

if(process.env.NODE_ENV == "production"){
    const prodConfig={
        baceUrl: '',
        port: "8081"
    }
    config = _.extend(config,prodConfig)
}
module.exports = config;