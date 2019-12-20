
import serve from 'koa-static';
import render from 'koa-swig';
import Koa from 'koa';
import co from 'co';
import log4js from 'log4js';
import errorHandler from './middleware/errorHandler';
const app = new Koa();
import config from "./config";

app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody: false,
    varControls: ["[[","]]"]
}));

log4js.configure({
    appenders: {
            cheese: { type: 'file', filename: '../docs/yansf-log.log' } 
        },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
})

const logger = log4js.getLogger('cheese');
errorHandler.error(app,logger)
require("./controllers")(app);

app.use(serve(config.staticDir));

app.listen(config.port, () => {
    console.log("服务已启动");
})