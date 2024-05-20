var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making a Array of Countries and Print its Original Order;
var countriesToVisit = ["Canada", "Denmark", "Brazil", "Argentina"];
console.log("Original Order", countriesToVisit);
//Print the Array in Alphabetical Order without Modifying the Actual Array List;
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
//Show that the Array is still in its Original Order;
console.log("Still in Original Order:", countriesToVisit);
//Print Array in Reversed Alphaetical Order without changing its Original Order;
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
//Again showing that the Array is still in its Original Order;
console.log("Still in Original Order:", countriesToVisit);
//We have Changed the Original Array Order now;
console.log("Original Array Reversed:", countriesToVisit.reverse());
//Print the Array to show that it's back to its Original Order now;
console.log("Back to Original Order:", countriesToVisit.reverse());
//Sorting Array in Alphabetical Order now;
console.log("Sorted in Alphabetical Order", countriesToVisit.sort());
//Changed the Array again in Reverse Alphabetical Order now;
console.log("Original Array Reversed Again:", countriesToVisit.reverse());
