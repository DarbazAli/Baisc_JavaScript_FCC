/* ==================================
    Arrays in JAVASCRIPT
================================== */

// Storing multiple values in one place using arrays
let myArray = ['First Item', 'Second Item', 22, true, undefined, null];
console.log(myArray);


// Nesting one array inside another array (Multi-dimentional array)
let mdArray = [ ["Age", 28], ["Hight", 180]];
console.log(mdArray);




// Access Array Data with Indexes
let indexedArray = [10, 20, 30, 40, 50];
let firstIndex = indexedArray[0];
console.log(firstIndex);





// Modify Array Data With Indexes
/* 
    In JavaScript arrays are mutable, 
    it means we can modfy the value of a specific element inside an array
*/

let baseArr = ["First", "Second", "Last"];
baseArr[0] = "NotFirst";
console.log(baseArr);



// Access Multi-Dimensional Arrays With Indexes

/* 
        var arr = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [[10,11,12], 13, 14]
        ];

        arr[3]; // equals [[10,11,12], 13, 14]
        arr[3][0]; // equals [10,11,12]
        arr[3][0][1]; // equals 11
*/

// Assignment: Extract No. 12 inside this array
let MDArray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14] ];
let myNumb = MDArray[3][0][2];
console.log(myNumb);


// Manipulate Arrays With push()
/* 
    .push() is a methode part of the Array object
    what push do is adds the taken argement to the end of another arrya
    .push() takes a parameter or more where its a single item or and array.
*/

let baseArray = [ ["Age", 28], ["Heigh", 180]];
baseArray.push(["Weight", 80], "Darbaz");
console.log(baseArray);


/* 
        Manipulate Arrays With unshift()
        .unshift() works exaclty like .push(), but instead of adding the element to the end of the array,
        it adds to the beginning of the array.
*/
baseArray.unshift(["Passion", "Programming"]);
console.log(baseArray);



/* 
        Manipulate Arrays With pop()
        .pop() removes the last item from an array (every type of entries, even nested arrays),
        then it retruns the removed value.
        .pop() modifies the original array.
*/

let myName = baseArray.pop();
console.log(baseArray); // the original array is changed
console.log(myName); // returned value of .pop() methode



/* 
        Manipulate Arrays With shift()
        .shift() works just like .pop(), but instead of removing the last item,
        .shift() removes the first item, and it returns the value

*/

let myAge = baseArray.shift();
console.log(baseArray);
console.log(myAge);







// Section Project
// Creaing a shopping list using multi-dimention array
let shoppingList = [
    ["Banana", 5],
    ["Cocka Cola", 3],
    ["Capuchino", 10],
    ["Choclate Bar", 6]
];

console.log(shoppingList);


