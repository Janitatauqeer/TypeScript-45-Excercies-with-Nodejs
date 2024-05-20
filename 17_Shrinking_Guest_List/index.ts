/*
17.Shrinking Guest List: You just found out that your new dinner table won’t
arrive in time for the dinner, and you have space for only two guests.
•Start with your program from Exercise 16. Add a new line that prints a 
message saying that you can invite only two people for dinner.

•Remove guests from your list one at a time until only two names remain
in your list. Each time you pop a name from your list, print a message 
to that person letting them know you’re sorry you can’t invite them to
dinner.

•Print a message to each of the two people still on your list, letting
them know they’re still invited.

•Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end 
of your program.
*/

//Starting program with Ex_16;

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
guestList.forEach(oneguest => console.log(`Assalamualaikum ${oneguest}, would you like to dinner with me.`));

//Inform that only two guest can be invited for dinner;
console.log("\nUnfortunately, the new dinner table won't arrive on time , so i can only invite two guest to dinner with me")

//Removing one guest at a time with message;
//using whileloop to remove guest from the array until only two names remain;
while(guestList.length > 2){
    let removedGuest= guestList.pop();
    console.log(`Sorry, ${removedGuest} I can't invite you to dinner.`);
};
//Sending a invitations to the last two guest on the list; 
console.log("\nInvitations to the last 2 Guests:")
guestList.forEach(lastTwo => console.log (`Luckly ${lastTwo}, you are still invited to dinner\n`));

//Removing last two guests from the list;
guestList.pop();
guestList.pop();

//Printing a empty guestlist
console.log("\nEmpty List" , guestList);