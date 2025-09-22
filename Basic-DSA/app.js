
// so we always use let and const instead of var

let a = 5;
let b = 10;
console.log(a + parseInt(b));

// here we tried to add number and string, so it will concatenate them instead of adding them
// to fix this we can convert string to number using parseInt or Number function

console.log("a and b are " + (a+b)) // this will concatenate a and b instead of adding them because of string in the beginning
console.log(a+b+" a and b are ") // this will add a and b first then concatenate the result with string because string is at the end