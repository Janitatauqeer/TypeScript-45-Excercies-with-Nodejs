/*
18.Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of 
the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its
 original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that
 its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the
 list to show that its order has changed.
*/



//Making a Array of Countries and Print its Original Order;
let countriesToVisit: string[] = ["Canada","Denmark","Brazil","Argentina"];
console.log("Original Order" , countriesToVisit);

//Print the Array in Alphabetical Order without Modifying the Actual Array List;
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//Show that the Array is still in its Original Order;
console.log("Still in Original Order:",countriesToVisit);

//Print Array in Reversed Alphaetical Order without changing its Original Order;
console.log("Reverse Order:",[...countriesToVisit].reverse());

//Again showing that the Array is still in its Original Order;
console.log("Still in Original Order:",countriesToVisit);

//We have Changed the Original Array Order now;
console.log("Original Array Reversed:", countriesToVisit.reverse());

//Print the Array to show that it's back to its Original Order now;
console.log("Back to Original Order:", countriesToVisit.reverse());

//Sorting Array in Alphabetical Order now;
console.log("Sorted in Alphabetical Order", countriesToVisit.sort());

//Changed the Array again in Reverse Alphabetical Order now;
console.log("Original Array Reversed Again:", countriesToVisit.reverse());
