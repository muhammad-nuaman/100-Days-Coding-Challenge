/*
<<<< Question 45: >>>>

# Cars: 

> Create detailed car objects with flexible properties.

Explain & TIP: Functions accepting a mix of fixed and arbitrary parameters let you create detailed and flexible objects. This is ideal for data with a few required fields and many optional fields.

*/

// Define Function
function makeCar(
    manufacturer: string, 
    model: string, 
    ...options: {[key: string]: unknown}[]
)
{
    const car: {[key: string]: unknown} = {manufacturer, model};
    options.forEach(option => Object.assign(car, option))
    return car
}

// Call Function
const myCar = makeCar('Toyota', 'Camry', {color: 'red'}, {year: 2020});

// Print Car
console.log(myCar);
