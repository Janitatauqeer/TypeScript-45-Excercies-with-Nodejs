/*
15.Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to 
think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end
of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is 
still in your list.
*/

//Changing my guestlist from ex 14;
let guestList = ["Talal", "Umer", "Jalal", "Hafsa", "Umaima", "Nabika"];

//Name of guest not coming;
let dontCome = guestList[2];
console.log(dontCome, "Can't come!");

//removing Jalal from the list & Adding new guest;
guestList.splice(2, 1 , "Utraj");

//Sending a new Invitation letter;
guestList.forEach((guest) =>
  console.log(`Assalamulaikum ${guest}, would you like to have dinner with me?`)
);
