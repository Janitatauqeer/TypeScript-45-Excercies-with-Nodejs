//Favourite mood of transportation;
var transportationModes = ["Sports Car", "Motor Bike", "Bicycle", "Sports Bike"];
//Series of statements about them;
transportationModes.forEach(function (mode) {
    return console.log("I would like to own a ".concat(mode));
});
