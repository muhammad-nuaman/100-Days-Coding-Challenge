"use strict";
/*
<<<< Question 45: >>>>

# Cars:

> Create detailed car objects with flexible properties.

Explain & TIP: Functions accepting a mix of fixed and arbitrary parameters let you create detailed and flexible objects. This is ideal for data with a few required fields and many optional fields.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Function
function makeCar(manufacturer, model, ...options) {
    const car = { manufacturer, model };
    options.forEach(option => Object.assign(car, option));
    return car;
}
// Call Function
const myCar = makeCar('Toyota', 'Camry', { color: 'red' }, { year: 2020 });
// Print Car
console.log(myCar);
