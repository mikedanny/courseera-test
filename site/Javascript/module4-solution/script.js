(function(window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (name in names) {
    if (names[name].charAt(0).toLowerCase() == "j") {
        goodbyeSpeaker.name = names[name];
        goodbyeSpeaker.sayGoodbye(goodbyeSpeaker.name);
    } else {
        helloSpeaker.name = names[name];
        helloSpeaker.sayHello(goodbyeSpeaker.name);
    }
  }

})(window);
