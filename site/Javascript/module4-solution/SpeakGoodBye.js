(function(window) { 
	var speakWord = "Good bye";
	var goodbyeSpeaker = {}
	goodbyeSpeaker.name = "Jim";
	goodbyeSpeaker.sayGoodbye = function (name) {
  		console.log(speakWord + " " + goodbyeSpeaker.name);
  	}

  	window.goodbyeSpeaker = goodbyeSpeaker;

})(window);
