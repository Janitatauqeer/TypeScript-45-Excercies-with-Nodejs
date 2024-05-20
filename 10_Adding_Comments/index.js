//Adding comments on my ex 2 and ex 3; 
//Ex 2_personalMessage;
//creating a personalmessage:
var personNames = "Malaika Qyreshi";
console.log("Hello", personNames, "would you like to learn some python today?");
//Ex 3_Name_Cases;
//Creating a variable;
var personName = "usman Tauqeer";
//Printing in lowercase;
console.log(personName.toLowerCase());
//Printing in UpperCase;
console.log(personName.toUpperCase());
//Printing in Tittlecase;
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
