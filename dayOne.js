// FCC Basic Javascript - Started April 16, 2020

// LESSON #1 - COMMENTS
// this is in-line comment
/* this is multi-line comment */

// LESSON #2 - VARIABLES
// Assigin a variable
var x;

// Initializing a variable
var y = 0;

/*
    VARIABLE TYPES
    JavaScript has 7 types of Variables:
    undefined, null, boolean, string, symbol, object, number
*/

var undif   = undefined;
var nul     = null;
var bool    = true || false;
var string  = 'This is a string';
var symb    = Symbol;
var Obj     = {};
var num     = 22;



/*==============================
    LESSON #3  - ARETHMATIC OPS
================================*/

// ADDITION OPERATOR (+)
var x = 5;
var y = 5;
var z = x + y; // z = 10


// SUBSTRACTION OPERATOR (-)
var x = 5;
var y = 4;
var z = x - y; // z = 1


// MULTIPLICATION OPERATOR (*)
var x = 5;
var y = 5;
var z = x * y; // z = 25;


// DIVIDION OPERATOR (/)
var x = 2;
var y = 4;
var z = y / x; // z = 2;


// INCREAMENT OPERATOR (++) - ADDING ONE TO A VAR
var x = 2;
x++; // = 3
++x; // = 4


// DECREAMENT OPERATOR (--) - SUBSTRACTION ONE FROM A VAR
var y = 5;
y--;

// console.log(y); 


// Remainder Operator (%)

var x = 5;
var y = 5 % 3; // y = 2




var comp = 5;
console.log(comp += 5); 
console.log(comp -= 5);
console.log(comp *= 5);
console.log(comp /= 5); 




/*==============================
    LESSON #4 STRING LITERALS
================================*/

var str = "I'm a \"programmer\""; 
console.log(str);

var str2 = 'I\'m a \'Programmer\'';
console.log(str2);


var concatStr = "Darbaz";
console.log(concatStr += " Ali");






