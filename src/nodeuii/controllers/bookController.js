const Index = require("../models");

class IndexController{
    constructor(name,type){

    }
    actionIndex(){
        return async(ctx, next) => {
            const index = new Index();
            const result = await index.getData('data');
            // ctx.body = "7897987987";
            ctx.body = await ctx.render("book/pages/index",{
                data: result.data.data
            })
        }
    }
    actionAdd(){
        return async(ctx,next)=>{
            console.log(ctx.request.header['x-pjax'])
            if(ctx.request.header['x-pjax']){
                console.log(123)
                ctx.body= '123';
            }else{
                console.log(456)
                ctx.body = await ctx.render('book/pages/add');
            }
            
        }
    }
}

module.exports =  IndexController;