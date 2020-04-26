/* 
    Iterate with JavaScript While Loops
    You can run the same code multiple times by using a loop.
    The first type of loop we will learn is called a while loop because 
    it runs "while" a specified condition is true 
    and stops once that condition is no longer true.
*/

let loopedArr = [] // initial array
loopedArr;

let count = 0; // counter for the loop cycle - starting point
while ( count <= 9 ) {
    loopedArr.push(count);
    count++; // add 1 to count after each loop
}

loopedArr;



let descendingArr = []

let i = 10; // starting point
while ( i >= 0) {
    descendingArr.push(i);
    i--;
}

descendingArr;

// create a function to generate an array based on inputs
// start, end, order


function genArr(start, end, order) {
    let result = []

    // descending order
    if ( order === false ) {
        let count = start;
        while ( count >= end ) {
            result.push(count);
            count--;
        }
    }

    // ascending order
    if ( order === true ) {
        let count = start;
        while ( count <= end ) {
            result.push(count);
            count++;
        }
    }

    return result;

}

let myArr = genArr(0, 10, true);

console.log(myArr);





/* 
    Iterate with JavaScript For Loops
    for ([initialization]; [condition]; [final-expression])
*/

let array = [];
for (let i = 0; i < 5; i++) {
    array.push(i);
}

array;



/* 
    Iterate Odd Numbers With a For Loop
    For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

    We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.
*/

var ourArray = [];
for (var j = 0; j < 10; j += 2) {
  ourArray.push(j);
}

ourArray;



/* 
    Count Backwards With a For Loop
    var ourArray = [];
    for (var i = 10; i > 0; i -= 2) {
         ourArray.push(i);
    }
*/

let oddArr = [];
for (let i = 9; i > 0; i -= 2) {
    oddArr.push(i);
}

oddArr





/* 
    Iterate Through an Array with a For Loop
*/

// create a function to add up all numbers of an array
let nums = [1, 2, 3, 4, 5, 6];
function summ(arr) {
    let total = 0;
    for ( let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(summ(nums));




/* 
    Nesting For Loops

    var arr = [
    [1,2], [3,4], [5,6]
    ];
    for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
    }
*/

// create a function that multiplies all the numbers in an array

function multiplyAll(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        for ( let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

let product = multiplyAll([[1,2], [3,4], [5,6]])

product;





/* 
    Iterate with JavaScript Do...While Loops

    do...while loop. It is called a do...while loop because 
    it will first do one pass of the code inside the loop no matter what, 
    and then continue to run the loop while the specified condition evaluates to true.

    do { execution } while ( condition );
*/

let doArr = []
let doCount = 0;

do {
    doArr.push(doCount);
    doCount++;
} while ( doCount < 10);


doArr;



/* 

    Replace Loops using Recursion

*/
// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

// function summ( arr, n ) {
//     if ( n <= 0) {
//         return n;
//     } else {
//         return summ(arr, n - 1 ) + arr[n - 1];
//     }
// }



/* 
    Project: Profile Lookup
    The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

    If both are true, then return the "value" of that property.

    If name does not correspond to any contacts then return "No such contact".

    If prop does not correspond to any valid properties of a contact found to match name then return "No such property".    
*/

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {

    let checkName = false;

    // loop through the array
    for (let i = 0; i < contacts.length; i++) {
        let current = contacts[i];

        // check if first name is exist?
        if ( current["firstName"] === name ) {
            checkName = true;

            // name is exist, but prop not
            if ( !current.hasOwnProperty(prop)) {
                return "No such property";
            } else {
                // return the value of the prop
                return current[prop];
            }
        }
    }

    // if firstName does not exist?
    if ( !checkName ) {
        return "No such contact";
    }
}

console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "adress"));






