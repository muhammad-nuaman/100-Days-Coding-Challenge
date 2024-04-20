"use strict";
/*
<<<<< Question 39: >>>>>

# City Names:

> Formatting city-country pairs.

*/
Object.defineProperty(exports, "__esModule", { value: true });
/* Define Function:
that return string that consist city and it's country name*/
const city_country = (city, country) => `${city}, ${country}`;
/* Call Function:
Define City and It's Country as a Argument*/
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('New York', 'USA'));
console.log(city_country('Paris', 'France'));
