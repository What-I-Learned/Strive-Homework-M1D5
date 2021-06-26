/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers
// (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/

/* WRITE YOUR CODE HERE */
function giveMeRandom(n) {
  let randNumArr = [];
  for (let i = 0; i < n; i++) {
    randNumArr.push(Math.floor(Math.random() * 11));
  }
  return randNumArr;
}
let randArr = giveMeRandom(5);
console.log(randArr);

function checkArray(arr) {
  let sum = 0;
  for (let item of arr) {
    if (item > 5) {
      sum += item;
      console.log(`Number ${item} is bigger than 5`);
    } else {
      console.log(`Number ${item} is bigger than 5`);
    }
  }
  return sum;
}

console.log(checkArray(randArr));

/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price,
// a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

/* WRITE YOUR CODE HERE */

const shoppingCart = [
  { id: 234, price: 24, name: "Lolipop", quantity: 2 },
  { id: 437, price: 52, name: "Chocolate", quantity: 7 },
  { id: 635, price: 47, name: "Sugar", quantity: 5 },
];

function shippingCartTotal(objArr) {
  let totalPrice = 0;
  objArr.forEach((arrItem) => (totalPrice += arrItem.price));
  return totalPrice;
}
console.log(shippingCartTotal(shoppingCart));

/* EXERCISE 13
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with 
// a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart 
// and returns the total number of items in the shoppingCart.
*/

/* WRITE YOUR CODE HERE */

function addToShoppingCart(objArr) {
  let totalAmount = 0;
  objArr.forEach((arrItem) => (totalAmount += arrItem.quantity));
  return totalAmount;
}
console.log(addToShoppingCart(shoppingCart));

/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

/* WRITE YOUR CODE HERE */
console.log("Ex 14");

function maxShoppingCart(objArr) {
  let currPrice = objArr[1];
  objArr.forEach(function (arrItem) {
    if (arrItem.price > currPrice) currPrice = arrItem;
  });

  return currPrice.name;
}
console.log(maxShoppingCart(shoppingCart));
/* EXERCISE 15
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects
// with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR CODE HERE */

function latestShoppingCart(shoppingCart) {
  let last = shoppingCart[shoppingCart.length - 1];
  return last;
}
console.log(latestShoppingCart(shoppingCart));

/* EXERCISE 16
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR CODE HERE */

function loopUntil(x) {
  let randNum = Math.floor(Math.random() * 10);
  let n = 0;
  if (x < 9 && x > 0) {
    while (n !== 3) {
      randNum = Math.floor(Math.random() * 9);
      randNum > x ? n++ : (n = 0);
      console.log(randNum);
    }
  }
  console.log("Loop Ended");
}
loopUntil(6);

/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR CODE HERE */
function average(arr) {
  let filterArr = arr.filter((el) => typeof el === "number");
  let avr = filterArr.reduce((sum, num) => sum + num) / filterArr.length;

  return avr;
}

console.log(average([1, 2, 5, 4, "a", "b"]));
/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

/* WRITE YOUR CODE HERE */

function longest(strArr) {
  let longestStr = strArr.reduce((prevW, currW) =>
    prevW.length > currW.length ? prevW : currW
  );
  return longestStr;
}
console.log(longest(["Kathy", "Adam", "Mathew", "Venezuela"]));

/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/

/* WRITE YOUR CODE HERE */
function anitSpam(emailContent) {
  let content = emailContent.toLowerCase().split(" ");
  let spamFree = !(content.includes("spam") || content.includes("scam"));

  return spamFree;
}
console.log(anitSpam(" what is my second name"));
console.log(anitSpam(" Scam is my second name"));

/* EXERCISE 20
Write a function that receives a date d as parameter and calculates the number of days passes since the d.
*/

/* WRITE YOUR CODE HERE */

// function numOfDays(d){
//     let startDate = new Date(d)
//     let currDate = new Date()
//     let oneDay = 1000 * 60*60*24;
//     let dayDiff = Math.round((currDate.getTime() - startDate.getTime())/oneDay);

//     return dayDiff
// }
// console.log(numOfDays());

/* EXERCISE 21
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a matrix of x times y with, 
as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/

/* WRITE YOUR CODE HERE */
function matrixGenerator(x, y) {
  for (let i = 0; i < x + 1; i++) {
    console.log(i.toString());
    for (let b = 0; b < y + 1; b++) {
      console.log(b.toString());
    }
  }
}
matrixGenerator(3, 2);
