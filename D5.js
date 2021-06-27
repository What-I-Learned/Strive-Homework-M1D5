/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

function area(a, b) {
  let area = a * b;
  return area;
}

console.log(area(2, 4));

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
function crazySum(a, b) {
  let sum = a === b ? (a + b) * 3 : a + b;
  return sum;
}

console.log(crazySum(3, 3));
console.log(crazySum(2, 3));

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
function crazyDiff(a) {
  let absDiff = Math.abs(a - 19);
  let diff = absDiff > 19 ? absDiff * 3 : absDiff;
  return diff;
}

console.log(crazyDiff(20));
console.log(crazyDiff(51));

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

/* WRITE YOUR CODE HERE */

function boundary(n) {
  return (n >= 10 && n <= 100) || n === 400 ? true : false;
}
console.log(boundary(15));
console.log(boundary(105));
console.log(boundary(400));

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", 
//then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */
function stirvify(string) {
  // let newString = string.slice(0,7) === "Strive"? string: "Strive "+ string

  return string.startsWith("Strive") ? string : "Strive" + string;
}

console.log(stirvify("Strivefy"));
console.log(stirvify("hello"));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
function check3and7(a) {
  //let result = a%3===0 || a%7===0 ? true:false
  // maybe the solution bellow is what is asked
  let result;
  if (a % 3 === 0) {
    result = `Multiple of 3`;
    return result;
  } else if (a % 7 === 0) {
    result = `Multiple of 7`;
    return result;
  } else {
    result = `Not a multiple of 3 or 7`;
    return result;
  }
  //return result
}
console.log(check3and7(12));
console.log(check3and7(14));
console.log(check3and7(13));

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */

function reverseString(string) {
  // anoter way:
  // let newStr
  // for(let i = string.lenth-1; i=0;i--){
  //     newStr+= stri[i];
  // }
  // return newStr

  return string.split("").reverse().join("");
}
console.log(reverseString("Strive"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */
function upperFirst(string) {
  let str = string.split(" ");
  let capStrings = [];
  for (const letter of str) {
    capStrings.push(letter[0].toUpperCase() + letter.slice(1));
  }
  console.log(capStrings.join(" "));
}
upperFirst("hello world");
//console.log(upperFirst('hello world'));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */
function cutString(string) {
  let cutStr = string.slice(1, -1);
  return cutStr;
}
console.log(cutString("Strive"));
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
function giveMeRandom(n) {
  let randNumArr = [];
  for (let i = 0; i < n; i++) {
    i < 0 ? (randNumArr[i] = 0) : (randNumArr[i] = i);
    randNumArr.push(Math.floor(Math.random() * 11));
    console.log(randNumArr[i]);
  }
  return randNumArr;
}
console.log(giveMeRandom(5));

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
