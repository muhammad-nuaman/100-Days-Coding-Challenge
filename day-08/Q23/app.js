"use strict";
/*
<<<< Question 23: >>>>>

# Conditional Tests:

> Write a series of conditional tests.

> Print a statement describing each test and your prediction for
the results of each test.

(Your code should look something like this:)

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Car
let car = {
    name: 'Toyota',
    model: 'Supra',
    year: 2022,
    color: 'Red',
    price: 150000,
    fuel: 'electric',
    speed: 200,
    mileage: 20,
    transmission: 'automatic',
    owner: 'Lightning McQueen'
};
// Set Predictions Answer
let predictions = ['Wrong', 'Right'];
// Print Predictions
console.log();
console.log(`I Predice it's Toyota Car!                  ${predictions[Number(car.name === 'Toyota')]}`);
console.log(`I Predice it's Model is Supra!              ${predictions[Number(car.model === 'Supra')]}`);
console.log(`I Predice it's Year is 2020!                ${predictions[Number(car.year === 2020)]}`);
console.log(`I Predice it's Color is 'Red!               ${predictions[Number(car.color === 'Red')]}`);
console.log(`I Predice it's Price is $200,000!           ${predictions[Number(car.price === 200000)]}`);
console.log(`I Predice it's Hybrid Fueling Car!          ${predictions[Number(car.fuel === 'hybrid')]}`);
console.log(`I Predice it's Speed is 200mph!             ${predictions[Number(car.speed === 200)]}`);
console.log(`I Predice it's Mileage 15 KM/L!             ${predictions[Number(car.mileage === 15)]}`);
console.log(`I Predice it's a Manual Transmission!       ${predictions[Number(car.transmission === 'manual')]}`);
console.log(`I Predice it's Owner is Lightning McQueen!  ${predictions[Number(car.owner === 'Lightning McQueen')]}`);
console.log();
