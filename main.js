"use strict";
// Define variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
// test for equality and inequality with Strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
// test !=
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
// Test using Lowercase Function
console.log("\nIs Apple is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs Apple is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical tests
// Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
// Not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
// Greater than
console.log("\nIs ten is greater than zero?");
console.log(10 > 0);
// Less than
console.log("\nIs Twenty is less than zero?");
console.log(20 < 0);
// Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(10 >= 5);
// Less than or equal to
console.log("\n twenty is less than or equal to 10?");
console.log(20 <= 10);
// Tests using "and " & "or" Oprators  
// using && (and)
console.log("\n twenty is not equal to ten and twenty is greater than 10");
console.log(twenty != 10 && 20 > 10);
console.log("\n twenty is not equal to ten and twenty is greater than 30");
console.log(twenty != 10 && 20 > 30);
//using ||(OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Test whether an item is include in array
console.log("\n Is orange includes in my Fruits array");
console.log(fruits.includes("orange"));
// not include
console.log("\n Is orange not includes in my Fruits array");
console.log(!fruits.includes("orange"));
