//Starting program with Ex_16;
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
//Inform that only two guest can be invited for dinner;
console.log("Unfortunately, the new dinner table won't arrive on time , so i can only invite two guest to dinner with me");
//Removing one guest at a time with message;
//using whileloop to remove guest from the array until only two names remain;
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I can't invite you to dinner."));
}
;
//Sending a invitations to the last two guest on the list; 
console.log("Invitations to the last 2 Guests");
guestList.forEach(function (lastTwo) { return console.log("Luckly ".concat(lastTwo, ", you are still invited to dinner")); });
//Removing last two guests from the list;
guestList.pop();
guestList.pop();
//Printing a empty guestlist
console.log("Empty List", guestList);
