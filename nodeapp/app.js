const Koa = require("koa")
const app = new Koa()
const config = require("./config")
const serve = require("koa-static")
const render = require("koa-swig")
const log4js = require('log4js');
const co = require("co")
const router = require("./controllers/router")
const errorHandler = require("./middlewares/errorHandler")
const bodyParser = require('koa-bodyparser')

app.context.render = co.wrap(render({
	root:config.viewDir,
	autoescape:true,
	cache:"memory",
	// varControls:["[[","]]"],
	ext:"html",
	writeBodt:false
}))
log4js.configure({
  appenders: { cheese: { type: 'file', filename: './logs/cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
 
const logger = log4js.getLogger('cheese');
// console.log(logger)
errorHandler.error(app,logger)
app.use(bodyParser())
router(app)
app.use(serve(config.staticDir))
app.listen(config.port,()=>{
	console.log("🍗server 已启动")
})