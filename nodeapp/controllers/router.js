const router = require("koa-simple-router")
const IndexController = require("./IndexController.js")
const indexController = new IndexController()

module.exports = function(app){
	app.use(router(_=>{
		_.get("/",indexController.actionIndex())
		_.get("/create",indexController.actionCreate())
		_.get("/search",indexController.actionSearch())
		_.post("/savedata",indexController.actionSaveData())
		_.post("/searchdata",indexController.actionSearchData())
	}))
}