/*
<<<<< Question 29 >>>>>> 

# Favorite Fruit: 

> Create an array for your favorite fruits and check if certain fruits are included.

*/

// Define Favorite Fruits
const favoriteFruits = ["banana", "orange", "mango"];
// Define Basket Fruits
const fruitBasket = ["banana", "pineapple", "mango", "strawberry", "orange"];

// Check Favorite Fruits in the Fruit Basket
fruitBasket.forEach((fruit) => {
  if (favoriteFruits.includes(fruit)) {console.log(`I like ${fruit}`)}
})