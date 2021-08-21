chrome.runtime.onMessage.addListener(function (request) {
    changeColor(request)
    changeFont(request)
 })
 
 function changeColor(request){
     document.body.style.backgroundColor = request
 }

 function changeFont(request){
    document.body.style.fontSize = request
}