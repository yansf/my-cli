const Index = require("../models");

class IndexController{
    constructor(name,type){

    }
    actionIndex(){
        return async(ctx, next) => {
            // ctx.body = 'hello koa';
            // var data = new index().getData('data');
            const index = new Index();
            const result = await index.getData('data');
            ctx.body = await ctx.render("index",{
                data: result.data.data
            })
        }
    }
    actionData(){
         
        return (ctx,next)=>{
            ctx.body = { 
                data: "yansf",
                message: "This is my message!"
            }
        }
    }
    actionTest(){
        return (ctx,next)=>{

        }
    }
}

module.exports =  IndexController;