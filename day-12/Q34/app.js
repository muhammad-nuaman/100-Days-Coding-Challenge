"use strict";
/*===========================================================
<<<<<< Question 34 >>>>>>>

# Pizzas:

> Share your favorite pizzas and express your love for them.

===========================================================*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Pizza with It's Descriptions
const pizzas = [
    {
        name: "Margherita Pizza",
        opinion: "Simple and delicious with tomato sauce, mozzarella, and basil.",
    },
    {
        name: "Pepperoni Pizza",
        opinion: "Classic favorite with spicy pepperoni and gooey cheese.",
    },
    {
        name: "BBQ Chicken Pizza",
        opinion: "Sweet and smoky BBQ sauce with tender chicken on crispy crust."
    }
];
// Print Title
console.log(`\n<<< Ｐｉｚｚａｓ >>>`);
// Print Pizza Names and Descriptions
pizzas.forEach(pizza => {
    console.log(`\n♡  ${pizza.name} ${pizza.opinion}\n`);
});
