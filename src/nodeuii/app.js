console.log(process.env.NODE_ENV);
const serve = require('koa-static');
const render = require('koa-swig');
const Koa = require('koa');
const co = require('co');
const log4js = require('log4js');
const errorHandler = require('./middleware/errorHandler');
const app = new Koa();
const config = require("./config");

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
            cheese: { type: 'file', filename: '../../docs/yansf-log.log' } 
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