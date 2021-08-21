document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#color1').addEventListener('click', onclick, false)
    document.querySelector('#font1').addEventListener('click', onclick1, false)
     
      function onclick () {
        
        var color = document.getElementById("color").value 
        console.log(color) ;
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, color)
        })
      }
      function onclick1 () {
        
        var font = document.getElementById("font").value 
        console.log(font); 
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, font)
        })
      }
   }, false)

  