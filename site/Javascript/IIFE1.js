(function (window) {
	var yaakovGreeter = {};
	yaakovGreeter.name = "Yaakov";
	yaakovGreeter.sayGoodDay = function () {
		console.log("Good day " + yaakovGreeter.name);
	}

	window.yaakovGreeter = yaakovGreeter;

})(window);