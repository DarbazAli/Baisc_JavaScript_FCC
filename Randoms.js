/* 

    Generate Random Fractions with JavaScript
    JavaScript has a Math.random() function that generates 
    a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive). 
    Thus Math.random() can return a 0 but never quite return a 1
*/

console.log(Math.random());




/* 
    Generate Random Whole Numbers with JavaScript

    Use Math.random() to generate a random decimal.
    Multiply that random decimal by 20.
    Use another function, Math.floor() to round the number down to its nearest whole number.
*/

var randFrom0to9 = Math.floor( Math.random() * 10 );
console.log(randFrom0to9);




/* 
     Generate Random Whole Numbers within a Range

     Math.floor(Math.random() * (max - min + 1)) + min
*/

function randomRange(min, max) {
    return Math.floor( Math.random() * ( max - min + 1 )) + min;
}

console.log(randomRange(1, 10));
console.log(randomRange(10, 20));
console.log(randomRange(10, 200));


/* 
    Use the parseInt Function with a Radix
    the second argument is called radix, wich is the base number for the convertion;
*/

console.log(parseInt("11"));
console.log(parseInt("11", 2));
// binary system
console.log(parseInt("10011", 2));



/* 
    Use the Conditional (Ternary) Operator
    condition ? statement-if-true : statement-if-false;
 */

 function checkEqual( a, b ) {
     return a === b? "Equal" : "Not Equal";
 }

 console.log(checkEqual(2,2));
 console.log(checkEqual(2,3));
 console.log(checkEqual(2,"2"));
 


 /* 
    Use Multiple Conditional (Ternary) Operators
 */

 function checkSign(num) {
     return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
 }

 console.log(checkSign(2));
 console.log(checkSign(-2));
 console.log(checkSign(0));
 

 function countUP(n) {
     if ( n < 1 || !n) {
         return [];
     } else {
         const countArr = countUP( n - 1 );
         countArr.push(n);
         return countArr;
     }
 }


 console.log(countUP(7));
 

 function countDown(n) {
     if ( n < 1) {
         return [];
     } else {
         let countArr = countDown( n - 1 );
         countArr.unshift(n);
         return countArr;
     }
 }


 console.log(countDown(7));


 function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }

 console.log(rangeOfNumbers(80, 90));





 
 