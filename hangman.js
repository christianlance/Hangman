var easybtn = document.getElementById("easybtn");

easybtn.addEventListener("click", function(){
    var easyRequest = new XMLHttpRequest();
    easyRequest.open('GET', 'https://hangman-micro-service-bpblrjerwh.now.sh/?difficulty=easy')
    easyRequest.onload = function(){
        var easyData = JSON.parse(easyRequest.responseText);
        console.log(easyData[1]);
    }; 
    easyRequest.send();
});

