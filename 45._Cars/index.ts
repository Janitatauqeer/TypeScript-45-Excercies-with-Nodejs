// Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


//Define a function to create a car object with optional options...;
function create_car(manufacturer , model , ...options){
    //initialize a car object with manufacture and model;

    let car ={
        manufacturer: manufacturer,
        model: model,
    };

    //Add additinal options to the car object;
    options.forEach(option => {
        let [key , value] = option.split(":");
        car [key.trim()] = value.trim();
    });

    return car;
};
//Call the function to create a car object;
let my_car = create_car("Toyota","Corrolla","Color: Black","Sunroof: True")

//Print the variable to ensure all the information is stored successfully in car object;
console.log(my_car)