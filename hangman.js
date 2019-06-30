var easybtn = document.getElementById("easybtn");

easybtn.addEventListener("click", function(){
    var easyRequest = new XMLHttpRequest();
    easyRequest.open('GET', 'https://hangman-micro-service-bpblrjerwh.now.sh/?difficulty=easy')
    easyRequest.onload = function(){
        var easyData = JSON.parse(easyRequest.responseText);
        console.log(easyData);
    }; 
    easyRequest.send();
});
var mediumbtn = document.getElementById("mediumbtn");

mediumbtn.addEventListener("click", function(){
    var mediumRequest = new XMLHttpRequest();
    mediumRequest.open('GET', 'https://hangman-micro-service-bpblrjerwh.now.sh/?difficulty=medium')
    mediumRequest.onload = function(){
        var mediumData = JSON.parse(mediumRequest.responseText);
        console.log(mediumData);
    }; 
    mediumRequest.send();
});
var hardbtn = document.getElementById("hardbtn");

hardbtn.addEventListener("click", function(){
    var hardRequest = new XMLHttpRequest();
    hardRequest.open('GET', 'https://hangman-micro-service-bpblrjerwh.now.sh/?difficulty=hard')
    hardRequest.onload = function(){
        var hardData = JSON.parse(hardRequest.responseText);
        console.log(hardData);
    }; 
    hardRequest.send();
});