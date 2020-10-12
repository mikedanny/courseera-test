//Functions are objects
function multiply(x, y){
	return x * y;
}

multiply.version = "v.1.0.0";

//Function factory
function makeMultiplier(multiplier){
	var myFunc = function(x) {
		return multiplier * x;
	};
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3); //the myFunc function from the makeMultiplier function
console.log(multiplyBy3(10));

//Passing functions as arguments
function doOperationOn(x, operation){
	return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);