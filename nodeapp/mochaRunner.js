const Mocha = require("mocha")
const mocha = new Mocha({
	reporter:"mochawesome",
	reporterOptions:{
		reporterDir:"./docs/mochawesome-reporter"
	}

})

mocha.addFile("./test/router.spec.js")
mocha.run(function(){
	process.exit()
})