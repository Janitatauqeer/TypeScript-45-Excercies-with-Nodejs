/*
42.Great Magicians: Start with a copy of your program from Exercise 41. Write a function called
make_great() that modifies the array of magicians by adding the phrase the Great to each 
magician’s name. Call show_magicians() to see that the list has actually been modified.
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

//Call make great function to modify magicians name;
let great_magicians = make_great(magician_names);

//Call show_magicians function its show modified list of array
show_magicians(great_magicians)

