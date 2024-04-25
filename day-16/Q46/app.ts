/*
<<<<<< Question 46: >>>>>

# Enhanced Laptop Object: 

> Construct an object for a laptop including properties make, model, year, 
and a method describe() that logs a sentence about the laptop.


*/

// Define Laptop Object
const laptop: {
    make: string;
    model: string;
    year: number;
    describe: () => void;
} = {
    make: "Apple",
    model: "MacBook Pro",
    year: 2021,
    describe: function () {
        console.log(`This is a ${this.make} ${this.model} from ${this.year} .`);
    }
}

// Call describe() method
laptop.describe();