/*
19.Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner.
*/

//Taking data from Ex_14;

//Guestlist
let guestlist = ["Talal", "Umer", "Jalal", "Hafsa", "Umaima", "Nabika"];

//Inviting them with a message;
//guestlist.forEach(oneGuest => console.log(`Assalamulaikum ${oneGuest}, would you like to have dinner with me?`));

//indicating the number of people invited in guestlist;
let lengthGuests: number = guestlist.length;

//Printing indicated number with invite message;
console.log(`We are Inviting total ${lengthGuests} guests.`);
