//String concatenation
var string = "Hello";
string += " World";
console.log(string + "!");

//Regular math operators
console.log((5 + 4) / 3);
console.log(undefined / 5);

//Equality
var x = 4, y = 4;
if (x ==y) {
	console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
	console.log("x='4' is equal to y=4"); //javascript automatically assigns the type of one variable to the type of the other. Strict equality prevents this behavior.
}

//Strict equality
if (x === y) {
	console.log("Strict: x='4' is equal to y=4");
}
else {
	console.log("Strict: x='4' is NOT equal to y=4");
}

//If statement (all false)
if (false || null || undefined || "" || 0 || NaN) {
	console.log("This line won't ever execute");
}
else {
	console.log("All false");
}

//If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
	console.log("All true");
}

//Curly brace on the same or next line...
function a()
{
	return 
	{
		name: "Yaakov"
	};
}

function b() {
	return {
		name: "Yaakov"
	};
}

console.log(a());
console.log(b());

//For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
	sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);