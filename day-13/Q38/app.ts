/*
<<<< Question 38:  >>>>

# Cities: 

> Describing cities with a function.

*/

// Define Function: That Print City and Country
function describe_city(city: string, country: string = 'Pakistan') {
    console.log(`${city} is in ${country}`);
}

// Call Function: Define City and Country to as Argument
describe_city('Karachi');
describe_city('Lahore');
describe_city('Shingai', 'China');