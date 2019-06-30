var word = new XMLHttpRequest;
word.open('GET', 'https://hangman-micro-service-bpblrjerwh.now.sh/')
word.onLoad = function(){
    console.log(word.responseText);
}; 
word.send();