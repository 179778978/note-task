const Rize = require("rize")
const rize = new Rize()
rize
  .goto('http://localhost:3000/index')
  .click("#check")
  .assertSee('查询图书')
  .saveScreenshot("firstpage.png")
  .end() 
