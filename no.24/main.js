//Define the Variabale
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
//Test for equality and inequality with strings
console.log("Is apple equal is to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
//Test using upercase Funtion
console.log("\nIS APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIS APPLE is not equal to apple after converting the lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numarical tests
//Equal to
console.log("\nIS ten is equal to twenty?");
console.log(ten == twenty);
//Not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
// Greater then
console.log("\nIs ten is greater then is zero?");
console.log(ten > 0);
//less then
console.log("Is twenty is less then ten?");
console.log(twenty < ten);
//greater then or equal to
console.log("\nIs ten is greater then or equal to 5?");
console.log(ten >= 5);
//Less then equal to
console.log("\ntwenty is less then or equal to ten?");
console.log(twenty <= ten);
// Tests using "and" & "or" operators
//using &&
console.log("\nIs twenty is not equal to ten and twenty is greater then ten");
console.log(twenty != ten && twenty > ten);
console.log("\nIs twenty is not equal to ten and twenty is greater then thirty");
console.log(twenty != ten && twenty > 30);
// using || (OR)
console.log("\nIS twenty is greater then 50 OR 20 is equal to 20?");
console.log(20 > 50 || 20 == 20);
console.log("\nIS twenty is greater then 50 OR 20 is not equal to 20?");
console.log(20 > 50 || 20 != 20);
//tests whether an item is include in array
console.log("\n Is orange include in my fruits array");
console.log(fruits.includes("orange"));
//not include
console.log("\n Is orange not include in my friuts array");
console.log(!fruits.includes("orange"));
