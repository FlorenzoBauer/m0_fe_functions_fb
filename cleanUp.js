// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName(name) { 
  console.log("Hello, what is your name?");

}
askForName();

//just calling the function

// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third;
console.log(sum);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
// replaced return with console log, return wouldnt display the items, the function would still work, but we would have no way to check or verify

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");  
  }

makeFreshPesto();
//added tion to function at beginning, rest of code works and is accurate

//  EX 4:
function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

return avg
  }

  console.log(average(2,4));