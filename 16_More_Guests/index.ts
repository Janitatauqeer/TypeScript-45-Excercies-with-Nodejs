/* 
16.More Guests: You just found a bigger dinner table, so now more space
is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end
of your program informing people that you found a bigger dinner table.

•Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one
 new guest to the end of your list. • Print a new set of invitation messages,
 one for each person in your list.
 */

//Using data from Ex(15)
//Creating a Guest List Array;
let guestList = ["Talal", "Umer", "Jalal", "Hafsa", "Umaima", "Nabika"];

//Making variable for those guest who cant come;
let dontCome = guestList[2];

//Printing the name of guest who cant come;
console.log(dontCome, "Can't come!");

//Add or remove value from Guest List Array;
guestList.splice(2, 1, "Utraj");

//Printing a message that we found a bigger table;
console.log("\nGood News ! We have found a bigger dinnner table\n");

//Adding a new guest at starting index of array;
guestList.unshift("Ahmer");

//Adding a new guest at ending index of array;
guestList.push("Suman");

//Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

//Adding a new guest to middle index of array;
guestList.splice(middleIndex, 0, "Usman");

//Print Message of Updated list;
console.log("Upsated List of our Guests");

//Sending invitation message to pur guests one by one with their names:
guestList.forEach(oneguest => console.log(`\nAssalamualaikum ${oneguest}, would you like to dinner with me.`));