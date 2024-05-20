/*
10.Adding Comments: Choose two of the programs you’ve written, and add at least one 
comment to each. If you don’t have anything specific to write because your programs 
are too simple at this point, just add your name and the current date at the top of
each program file. Then write one sentence describing what the program does.
*/

//Adding comments on my ex 2 and ex 3; 

//Ex 2_personalMessage;
 
//creating a personalmessage:

let personNames = "Malaika Qyreshi";
console.log("Hello", personNames, "would you like to learn some python today?");



//Ex 3_Name_Cases;

//Creating a variable;
let personName = "usman Tauqeer";

//Printing in lowercase;
console.log(personName.toLowerCase());

//Printing in UpperCase;
console.log(personName.toUpperCase());

//Printing in Tittlecase;
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));