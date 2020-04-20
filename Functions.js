// Day 4 of freeCodeCapm Javascript Course
const log = console.log;

// Creating reusable code with functions
function reusableFunc() {
    console.log("I'm a reusable code, You can invoke me wherever you want.");
}



// Funtions with arguments
// args are the inputs that passed to a function during the invoke
function funcWithArgs(arg1, arg2) {
    return arg1 + arg2
}

console.log(funcWithArgs(2, 2));
console.log(funcWithArgs("Darbaz ", 1));


// Variable Scope in JS
// Every var that is declared withouth var keyword, it will be a global scope

// global vars
var myGlobal = "Global Var";

function scopeBox() {
    // Super Gloabl
    //superGlobal = "I'm supper global variable";

    // function scope variable
    //var funcScop = "Function Scope variable";
};



// Local Scope to a block
function myLocalScope() {
    var myLocal = "I'm a local var";
    console.log(myLocal);
};

log(myLocalScope());
// log(myLocal);



// Global vs. Local Scope in Functions
/* 
    It is possible to have both local and global variables with the same name. 
    When you do this, the local variable takes precedence over the global variable.
*/

var someVar = "T-shirt";
function precedenceVar() {
    var someVar = "Jacket";
    return someVar;
}

log(precedenceVar());



/* 
    Return a Value from a Function with Return
*/

function timesFive(number) {
    return number * 5;
}

log(timesFive(5));
log(timesFive(10));
log(timesFive(0));
console.log(timesFive(20));





/* 
    Undefined Value returned from a Function
    if you dont return a function to a value or an expression,
    then, the function invoke returns "undefined";
*/

var summ = 0;
function addFive(num) {
    summ += 5;
}

console.log(addFive(3));




/* 
    Assignment with a Returned Value
    we can assign a returned value from a function to a variable
*/

function addUp(num1, num2) {
    return num1 + num2;
}

var myCalc = addUp(20, 21);
console.log(myCalc);




// Project: Stand in Line
/* 
    Queu is a Data Structur whre items can be kept in order,
    One Item adds to the end,
    One removes from the first
*/

function nextInLine(arr, item) {
    // add item to the end of the array with push()
    arr.push(item);
    
    // remove the first item of the array, then return the remvoed item
    return arr.shift(); // this is the number in line
}

console.log(nextInLine([1, 2, 3, 4, 5], 2));
console.log(nextInLine([], 1));
console.log(nextInLine([], 2));



