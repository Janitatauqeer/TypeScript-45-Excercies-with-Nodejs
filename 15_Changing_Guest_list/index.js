//Changing my guestlist from ex 14;
var guestList = ["Talal", "Umer", "Jalal", "Hafsa", "Umaima", "Nabika"];
//Name of guest not coming;
var dontCome = guestList[2];
console.log(dontCome, "Can't come!");
//removing Jalal from the list & Adding new guest;
guestList.splice(2, 1, "Utraj");
//Sending a new Invitation letter;
guestList.forEach(function (guest) {
    return console.log("Assalamulaikum ".concat(guest, ", would you like to have dinner with me?"));
});
