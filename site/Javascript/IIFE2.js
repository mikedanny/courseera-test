(function (window) {
	var johnGreeter = {};
	johnGreeter.name = "John";
	johnGreeter.sayGoodNight = function () {
		console.log("Good night " + johnGreeter.name);
	}

	window.johnGreeter = johnGreeter;

})(window);