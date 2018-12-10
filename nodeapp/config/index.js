const {join} = require("path")
const _ = require("lodash")
let config = {
	'staticDir':join(__dirname,"..","public"),
	'viewDir':join(__dirname,'..','views')
}

let env = process.env.NODE_ENV
if(env == "development"){
	const localConfig = {
		port:3000,
		baseUrl:"http://localhost:8080/index.php?r="
	}
	config = _.extend(config,localConfig)
}else if(env =="production"){
	const prodConfig ={
		port:8081
	}
	config = _.extend(config,prodConfig)

}

module.exports = config