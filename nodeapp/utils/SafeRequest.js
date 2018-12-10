const fetch = require("node-fetch");
const config = require("../config")
class SafeRequest {
    constructor(url) {
        this.url = url
        this.baseUrl = config.baseUrl
    }

    fetch(options) {
        return new Promise((resolve, reject) => {
            let result = {
                code: 0,
                message: '请求失败'
            }
            // console.log(this.baseUrl+this.url)
            console.log(options)
            let packFetch = fetch(this.baseUrl+this.url)
            if(options.params){
            	packFetch = fetch(this.baseUrl+this.url,{
            		method:options.method,
            		body:options.params
            	})
            }
            
                // .then(res => {

                //     try {
                //         result = res.json()

                //     } catch (error) {
                //         result.code = 1
                //         result.messgae = "解析json失败"
                //         reject(result)
                //     }
                // })
                packFetch
                .then(res=>res.json())
                .then(body => {
                	result.code = 0
                	result.message = "请求成功"
                	result.data = body
                    resolve(result)
                }).catch(error => {
                    result.code = 1
                    result.message = "node-fetch请求失败，后端报警"
                    reject(result)
                })
        })
    }
}

module.exports = SafeRequest