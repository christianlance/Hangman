var easy = new XMLHttpRequest;
easy.open('GET', 'https://hangman-micro-service-bpblrjerwh.now.sh/?difficulty=easy')
easy.onLoad = function(){
    var easy = JSON.parse(easy.responseText);
    console.log(easy[1]);
}; 
easy.send();