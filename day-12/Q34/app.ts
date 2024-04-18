/*
<<<<<< Question 34 >>>>>>>

# Pizzas: 

> Share your favorite pizzas and express your love for them.

*/


// Define Pizza Names
const pizzas: string[] = ["Margherita Pizza", "Pepperoni Pizza", "BBQ Chicken Pizza"];

// Define Pizza Descriptions
const opinoins: string[] = [
    "Simple and delicious with tomato sauce, mozzarella, and basil.", 
    "Classic favorite with spicy pepperoni and gooey cheese.", 
    "Sweet and smoky BBQ sauce with tender chicken on crispy crust."
];


// Print
pizzas.forEach((pizza, index) => {
    console.log(`\n★  ${pizza} ${opinoins[index]}\n`);
})