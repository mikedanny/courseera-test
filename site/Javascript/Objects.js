// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log("Company CEO name is: " + company.ceo.firstName);
// // company["stock of company"] = 110; --> //one way to do it
// // console.log(company);
// // console.log("Stock price is: " + company["stock of company"]);

// // console.log(company["name"]);

// //another way to do it
// var stockPropName = "stock of company";
// company[stockPropName] = 110;
// console.log("Stock price is: " + company[stockPropName]);


//Better way: object literal
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "blue"
	}, 
	"stock of company": 110
}; //object literal

console.log(facebook.ceo.firstName);
