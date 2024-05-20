"use strict";
/*
41.Magicians: Make a array of magician’s names. Pass the array to a function called
(), which prints the name of each magician in the array.
*/
// Function to show magicians from an array
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//Defining an array containing magicians name;
let magician_names = ["Harry porter", "David Blaine", "David Copperfield"];
//Call the functions to print each magicians name;
show_magicians(magician_names);
