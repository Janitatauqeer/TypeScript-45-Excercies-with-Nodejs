/* 
2.Personal Message: Store a person’s name in a variable, and print a message to that person.
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
*/

let person_Name = "usman tauqeer";

console.log(person_Name.toLowerCase());

console.log(person_Name.toUpperCase());

console.log(person_Name.replace(/\b\w/g, (char) => char.toUpperCase()));