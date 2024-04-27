/*
<<<<< Question 52: >>>>>

# Make a Smartphone Object: 

> Create a simple way to keep track of a smartphone's details. 
Include its brand, model, and other key features like how much storage 
it has, the size of its screen, and how long its battery lasts.

*/

// Define Smartphone Object
const smartphone: {[key: string]: unknown} = {
    brand: "Apple",
    model: "iPhone 12",
    specs: {
        storage: "128GB",
        screenSize: "6.1 inches",
        batteryLife: "10 hours"
    }
}

// Print the smartphone
console.table(smartphone);
