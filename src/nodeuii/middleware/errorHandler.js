const errorHandler = {
    error(app,logger){
        app.use(async(ctx,next)=>{
            try {
                await next();
            }catch(error){
                logger.error(error);
                ctx.status = error.status || 500;
                ctx.body = error;
            }
        });
        app.use(async (ctx,next)=>{
            await next();
            if(ctx.status !== 404){
                return;
            }
            ctx.status = 200;
            ctx.body = await ctx.render("index",{
                data: "404 页面找不到了"
            });
        })
    }
}

module.exports = errorHandler;