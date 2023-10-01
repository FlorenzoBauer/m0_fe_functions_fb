// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
console.log("Hi, nice to meet you.");

}
greeting();
// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return name;
}
var nom = customGreeting("Sharon");
console.log(`Hello, nice to meet you ${nom}!!!`);
// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(fullName) {
var first = `Michael`;
var second = `Scott`;
var third = `Johnson`;
    return fullName = (`Nice to meet you, ${[first , second, third]} !`);
}
var a = greetPerson();
console.log(a)
// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(two){
    var squared = two * two;
    return squared;
}
var skwear = square(4);
console.log(skwear);
// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(stock){
var stonks = [`Cheese - Out of Stock`, `Salsa - Running Low`, `Asparagus - Fully Stocked` , `Tortillas - Running Low` , `Coffee is stocked`];
    for (i = 0; i < stonks.length; i++) {
        
        console.log("Stock is as follows " + stonks[i])

    }

return stock;
}
checkStock();
//git add commit then push origin main