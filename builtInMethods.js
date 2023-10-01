// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
var hi = "Hello World".toLowerCase();
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"

var hi2 = "Hello World".includes("Hello");
//.include is a boolean that checks if "Hello" is in the string "Hello World", and displays as true if it matches

var hi3 = "Hello World".endsWith("Hello");
//.endswith function checks the parameters "Hello" to see if the string "Hello world" ends with those parameters, if not it will display as false in this case.

var hi4 = "Hello World".endsWith("rld");
//.endswith function checks the parameters "rld" to see if the string "Hello world" ends with those parameters, it will display as true in the example


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

//toLowerCase will make the string firstName go into lowercase. 
//toUppercase will then counteract that and make the entire string uppercase. 

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.
function bobsBurgers(){
    var bobBurgers = ["Cheeseburger", "Hamburger", "SUPER Burger", "Pickle Burger"];
    bobBurgers.sort();
    bobBurgers.copyWithin( 1, 3);
    return bobBurgers;
}

var blobBurgers = ``;
console.log(blobBurgers = `This is our menu: ${bobsBurgers()}`);



