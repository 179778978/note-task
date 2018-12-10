const 	Request = require("../models/Request")
const {URLSearchParams} =require("url")
class IndexController{
	constructor(){

	}
	actionIndex(){
		return async (ctx,next)=>{
			const request = new Request()
			const result =  await request.getData()
			ctx.body = await ctx.render("index",{books:result.data})
		}
	}

	actionCreate(){
		return async (ctx,next)=>{
			ctx.body = await ctx.render("create")
		}
	}

	actionSearch(){
		return async (ctx,next)=>{
			ctx.body = await ctx.render("search")
		}
	}

	actionSaveData(){
		return async (ctx,next)=>{
			const request = new Request()
			let body = ctx.request.body 
			// console.log(body)
			const params = new URLSearchParams()
			params.append("Book['name']",body.name)
			params.append("Book['author']",body.author)
			params.append("Book['process']",body.process)
			params.append("Book['publictime']",body.publictime)

			const result =  await request.saveData({
				method:"post",
				params:params
			})
			let data 
			if(result.code == 0){
				data = await request.getData()
			}
			ctx.body = await ctx.render("index",{books:data.data})
		}
	}

	actionSearchData(){
		return async (ctx,next)=>{
			const request = new Request()
			let body = ctx.request.body 
			console.log("苹果",body)
			const params = new URLSearchParams()
			params.append("BookSearch['id']",body.bookid)
			params.append("BookSearch['name']",body.name)
			params.append("BookSearch['author']",body.author)
			params.append("BookSearch['process']",body.process)
			params.append("BookSearch['publictime']",body.publictime)

			const result =  await request.searchData({
				method:"post",
				params:params
			})
			// let data 
			// if(result.code == 0){
			// 	data = await request.getData()
			// }
			// console.log(result)
			ctx.body = await ctx.render("index",{books:result.data})
		}
	}

}

module.exports = IndexController