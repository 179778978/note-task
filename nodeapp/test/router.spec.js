const fetch = require("node-fetch")
describe("node接口测试",function(){
	it("index接口测试",function(done){
		fetch("http://localhost:8080/index.php")
		.then(res => {
			done
			return res.json()
		})
		.then(function(res){
			console.log(res)
			if(res.statusCode == 200){
				done()
			}else{
				done(new Error("数据请求格式错误"))
			}
		}).catch(function(error){
			done(error)
		})
	})
})