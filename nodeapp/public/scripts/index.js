function throttle(fn,time){
        var startTime = new Date();
        return function(){
            var time_ = (new Date() - startTime) >= time;
            if(time_){
                fn.apply(this);
                startTime = new Date();
            }
        }
    }



function validateForm() {
	var forms = document.forms["createForm"]
  var name = forms["name"].value;
  var author = forms["author"].value;
  var bookProcess = forms["process"].value;
  var publictime = forms["publictime"].value;
  if (name == null || name == "")
  {
    alert("书名不能为空");
    return false;
  }
  if (author == null || author == "")
  {
    alert("作者不能为空");
    return false;
  }
  if (bookProcess == null || bookProcess == "")
  {
    alert("出版社不能为空");
    return false;
  }
  if (publictime == null || publictime == "")
  {
    alert("出版时间不能为空");
    return false;
  }
  return true
}

function validate() {
  // body...
  return true
}

// var  validateForm = throttle(validate,1000)

function deleteBook(event) {
  console.log(event)
}