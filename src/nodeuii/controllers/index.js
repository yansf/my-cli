const indexController = require("./indexController");
const bookController = require("./bookController");
const router = require('koa-simple-router');
const indexControl = new indexController();
const bookControl = new bookController();


module.exports = (app)=>{

    app.use(router(_=>{
        _.get("/",indexControl.actionIndex());
        _.get("/data",indexControl.actionData()); 
        _.get("/add",bookControl.actionAdd());
        _.get("/index",bookControl.actionIndex()); 
    }))

}