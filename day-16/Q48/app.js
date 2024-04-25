"use strict";
/*
<<<<< Question 48: >>>>>

# Combining Arrays with Spread Operator:

>
Suppose you're comparing prices of two different sets of laptops.
Use the spread operator to combine these arrays into a single array sorted
in ascending order, then log the result.

*/
Object.defineProperty(exports, "__esModule", { value: true });
let priceset1 = [1000, 2000, 3000];
let priceset2 = [4000, 5000, 6000];
let comparedPrices = [...priceset1, ...priceset2].sort((a, b) => a - b);
console.table(comparedPrices);
