class IndexController{
    constructor(){

    }
    actionIndex(){
        return async(ctx, next) => {
            // ctx.body = 'hello koa';
            ctx.body = await ctx.render("index",{
                data: "我来了"
            })
        }
    }
    actionData(){
        return (ctx,next)=>{
            ctx.body = {
                data: "yansf"
            }
        }
    }
}

module.exports =  IndexController;