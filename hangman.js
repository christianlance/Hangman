var easybtn = document.getElementsByTagName("easybtn");
easybtn.addEventListener("click", function(){
    var easy = new XMLHttpRequest;
    easy.open('GET', 'https://hangman-micro-service-bpblrjerwh.now.sh/?difficulty=easy')
    easy.onLoad = function(){
        var easyData = JSON.parse(easy.responseText);
        console.log(easyData[0]);
    }; 
    easy.send();
});

