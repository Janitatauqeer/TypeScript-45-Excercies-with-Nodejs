/*
43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
with a copy of the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call show_magicians() with each array 
to show that you have one array of the original names and one array with the Great added to each
magician’s name.
 */

// Function to show magicians from an array
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//Function to make magicians great through .map() , It will modify the array
function make_great(magicians :string[]){
    return magicians.map(name => `The Great ${name}`);
}

//Defining an array containing magicians name;
let magician_names = ["Harry porter","David Blaine","David Copperfield"];

//Making a copy of original array through .slice() function;
let copy_magician_names = magician_names.slice();

//Modify the copied array to include "The Great" with their names;
let copy_great_magicians = make_great(copy_magician_names);

//Show both arrays Original and Copied;

//Original;
console.log("\nOriginal Array:")
show_magicians(magician_names);

//Copied;
console.log("\nCopied Array:")
show_magicians(copy_great_magicians)