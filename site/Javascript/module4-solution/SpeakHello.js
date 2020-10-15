(function(window) { 
	var speakWord = "Hello";
	var helloSpeaker = {}
	helloSpeaker.name = "John";
	helloSpeaker.sayHello = function (name) {
  		console.log(speakWord + " " + helloSpeaker.name);
  	}

  	window.helloSpeaker = helloSpeaker;

})(window);
