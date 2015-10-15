
//variables & data types
//strings
var state = "Pennsylvania";
var city = "Philadelphia";

//numbers
var num1 = 5;
var num2 = 10;
var solution = num1 * num2;

//boolean
var yourNameIsJillian = true;
var yourNameIsBob = false;
console.log(yourNameIsBob);

//printing to console
console.log(city, state);
console.log(num1 + num2);
console.log(num1 - num1);
console.log(solution);

//alerts
alert("Hi Jillian");

//arrays
var seasons = ["Winter", "Spring", "Summer", "Autumn"];
var months = [["January", "February", "March"], ["April", "May", "June"]];
var combine = [seasons, months];
console.log(combine);
console.log(seasons);
console.log(seasons[2]);
console.log(months[0][2]);

//objects
var grocery1 = {aisle: "Produce", item: "Vegetable"};
var grocery2 = {aisle: "Bakery", item: "Bread"};
console.log(grocery1["aisle"]);
console.log(grocery2.item);
var shoppingList = [grocery1, grocery2];
console.log(shoppingList);


//Logging to HTML
function change(){
	document.getElementById('example').innerHTML = "Something New";
}

