var x; //will throw an error if this line is commented and not declared
console.log(x);

if (x == undefined) {
	console.log("x is undefined");
}

x = 5;
if (x == undefined) {
	console.log("x is undefined");	
}
else {
	console.log("x has been defined");
}
