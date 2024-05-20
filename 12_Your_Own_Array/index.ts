/* 
12.Greetings: Start with the array you used in Exercise 11, but instead of just 
printing each person’s name, print a message to them. The text of each message 
should be the same, but each message should be personalized with the person’s name.
*/


//Favourite mood of transportation;

let transportationModes = ["Sports Car", "Motor Bike", "Bicycle", "Sports Bike"];

//Series of statements about them;
transportationModes.forEach((mode) =>
  console.log(`I would like to own a ${mode}`)
);
