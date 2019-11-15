const indexController = require("./indexController");
const router = require('koa-simple-router')
const indexControl = new indexController();


module.exports = (app)=>{

    app.use(router(_=>{
        _.get("/",indexControl.actionIndex()) 
        _.get("/data",indexControl.actionData()) 
    }))

}

