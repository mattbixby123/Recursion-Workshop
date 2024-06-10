// Q1. Add the missing code to the given code by calculating the greatest common divisor of two numbers.

// function gcd(a, b) {
//   if (b === 0) {
//     // Add code here
//   } else {
//     // Add code here
//   }
// }
// console.log(gcd(48, 18));

// A1.

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }  
}
console.log(gcd(48, 18));


// Q2. Add the missing code to reverse a given string. Return the substring of the string from index 1 to the end. Concatenate the reversed substring (from the recursive call) with the original string's first character.
// function reverseString(str) {
//   if (str === "") {
//     return "";
//   } else {
//    // Add code here
//   }
// }

// console.log(reverseString("hello"));

// A2. 
function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseString("hello"));