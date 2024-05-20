/*
24.More Conditional Tests: You don’t have to limit the number of tests you create 
to 10. If you want to try more comparisons, write more tests. Have at least one 
True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, 
greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

//Define variables;
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits =["Apple", "Banana" ,"Mango"];

//Test for equality and unequality with strings;
console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

//Test using the lower case function;
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple")

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

//Numerical Tests;
//Equal to;
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

//Not Equals to;
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

//Greater than;
console.log("\nIs ten is greater than zero?");
console.log(10 > 0)

//Less than;
console.log("\nIs twenty is less than ten?");
console.log(twenty < 10);

//Greater than or Equal to;
console.log("\nIs ten is greater than or equal to 5?");
console.log(10 >= 5);

//Less than or Equal to;
console.log("\nIs twenty is less than or equal to ten?");
console.log(20 <= 10);

//Tests using "and" & "or" operators;
//Using && "and";
console.log("\nTwenty is not equal to 10 and twenty is greater than 10"?)
console.log(twenty != 10 && twenty > 10);

//Using || "or";
console.log("\n")