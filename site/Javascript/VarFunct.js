var message = "in global";
console.log("global: message = " + message);

var a = function() {
	var message = "inside a";
	console.log("A: message = " + message);

	function b () {
	console.log("b: message = " + message); //when b is inside function a
}

	b();

}

// function b () {
// 	console.log("b: message = " + message);
// } //when b is outside function a

a();