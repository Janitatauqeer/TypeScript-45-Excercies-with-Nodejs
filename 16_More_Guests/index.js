//Using data from Ex(15)
//Creating a Guest List Array;
var guestList = ["Talal", "Umer", "Jalal", "Hafsa", "Umaima", "Nabika"];
//Making variable for those guest who cant come;
var dontCome = guestList[2];
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
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array;
guestList.splice(middleIndex, 0, "Usman");
//Print Message of Updated list;
console.log("Upsated List of our Guests");
//Sending invitation message to pur guests one by one with their names:
guestList.forEach(function (oneguest) { return console.log("\nAssalamualaikum ".concat(oneguest, ", would you like to dinner with me.")); });
