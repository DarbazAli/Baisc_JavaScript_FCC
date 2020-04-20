// Part 5 of FCC algorithms
// Understanding booleans and logic

// Boolean values are either "true" or "false";
// True means on, and false means off
function wellcomeToBooleans() {
    return true || false;
}

console.log(wellcomeToBooleans());

/* ================================================================================= */

/* 
    Controll flow with If Statement
*/

function trueOrFalse(condition) {
    // if the param is true, it's a truthy value,
    // then this block of code will be executed
    if (condition) {
        return "Yes, the condition is True";
    }

    // if the condition is not true, then...
    return "No, the condition is False";
}

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));
console.log(trueOrFalse(0));
console.log(trueOrFalse(1));
/* ================================================================================= */



/* 
    Comparison with the Equality Operator (==)
    in this type of comparision, of one value is not the type of another value
    javascript will automatticly change the type of one vlaue to another
*/
function compareVal(val_1, val_2) {
    if (val_1 == val_2) {
        return "Equal";
    }
    // if not
    return "Not Equal";
}

console.log(compareVal(2, 2));
console.log(compareVal(2, 4));
console.log(compareVal(2, "2"));
console.log(compareVal("6", "2"));

/* ================================================================================= */



/* 
    Comparison with the Strict Equality Operator (===)
    In this type, any type conversion will not be happen to compare the values
*/

function strictCompare(val_1, val_2) {
    if (val_1 === val_2) {
        return "Equal";
    }

    return "Not Equal";
}

console.log(strictCompare(1, 2));
console.log(strictCompare(1, 1));
console.log(strictCompare(1, "1"));
console.log(strictCompare("True", "True"));
/* ================================================================================= */


/* 
    Comparison with the Inequality Operator (!=) Not Equal
    works just like (==) but in a negative way
*/

function testNotEqual(val_1, val_2) {
    if (val_1 != val_2) {
        return "Not Equal";
    }

    return "Equal";
}


console.log(testNotEqual(22, 33));
/* ================================================================================= */


/* 
    Comparison with the Strict Inequality Operator (!==) Strictly Not Equal
*/

console.log( 3 !== 3) ;
console.log( 3 !== 4 );
console.log( 3 !== "3" );
/* ================================================================================= */



/* 
    Comparison with the Greater Than Operator (>)
    similar to Equality Operator, it changes data types to perfome actions
*/

function checkScale(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "Less than 10";
}

console.log(checkScale(1))

console.log(3 > 3);
console.log(3 > "3");
console.log(3 > 1);
/* ================================================================================= */




/* 
    Comparison with the Greater Than Or Equal To Operator (>=). Changes data type
*/

console.log( 6   >=  6  )  
console.log( 7   >= '3' )  
console.log( 2   >=  3  )  
console.log( '7' >=  9  )  
/* ================================================================================= */






/* 
    Comparison with the Less Than Operator (<). Changes data type
*/

console.log( 2   < 5 ) 
console.log( '3' < 7 ) 
console.log( 5   < 5 ) 
console.log( 3   < 2 ) 
console.log( '8' < 4 ) 
/* ================================================================================= */






/* 
    Comparison with the Less Than Or Equal To Operator (<=). converts data type
*/

console.log( 2   <= 5 ) 
console.log( '3' <= 7 ) 
console.log( 5   <= 5 ) 
console.log( 3   <= 2 ) 
console.log( '8' <= 4 ) 
/* ================================================================================= */




/* 
    Comparisoin with AND Operator (&&)
    Returns True if and only if both sides of comparisions are true
*/

let number = 5;
if (number > 5) {
    if (number < 10) {
        return "Yes";
    }
}

// we could say
if (number > 5 && number < 10) {
    return "yes";
}





/* 
    Comparisons with the Logical Or Operator (||)
    Returns True if eithe one of the 2 sides are true
*/

function checkEligible(age) {
    if ( age > 20 || age < 40) {
        return "Eligible";
    }

    return "Not Eligible";
}


/* 
    Defingin Control flow of a programs with (if-else) statement

    if (condition is true) {
        execute this line
    } else {
        execute this line
    }
*/

// Single if with else

function checkTrueOrFalse(num) {
    if ( num > 10) {
    return "I must be true";
    } else {
    return "I must be false";
    }
}



// More thatn one if
/* 
    if (condition one is true) {
        execute this line
    }
    else if (condition two is true ) {
        execute this line
    }
    else {
        execute this line
    }
*/

function checkNumber(number) {
    if ( number > 15 ) {
        return "Bigger than 15";
    }
    else if (number < 5 ) {
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 15";
    }
}




/* 
    Chaining If Else Statements
    if/else statements can be chained together for complex logic.

        if (condition1) {
        statement1
        } else if (condition2) {
        statement2
        } else if (condition3) {
        statement3
        . . .
        } else {
        statementN
        }
*/

function checkSize(size) {
    if ( size < 5 ) {
        return "Tiny";
    } else if ( size < 10) {
        return "Small";
    } else if ( size < 15 ) {
        return "Medium";
    } else {
        return "Large";
    }
}

console.log(checkSize(10));




/* 
    Algorithm: Golf Code
    Strokes	Return
    1	"Hole-in-one!"
    <= par - 2	"Eagle"
    par - 1	"Birdie"
    par	"Par"
    par + 1	"Bogey"
    par + 2	"Double Bogey"
    >= par + 3	"Go Home!"
*/


function golfScore(par, strokes) {
    var names = 
    ["Hole-in-one!", 
    "Eagle", 
    "Birdie", 
    "Par", 
    "Bogey", 
    "Double Bogey", 
    "Go Home!"];

    // return first name, if stroke == 1
   if ( strokes == 1 ) {
     return names[0]
   }
  
   else if (strokes == par ) {
     return names[3]
   }
  
   else if ( strokes <= par -2 ) {
     return names[1]
   }
  
  
   else if ( strokes == par - 1 ) {
     return names[2]
   }
  
   else if ( strokes == par + 1) {
     return names[4]
   }
  
   else if ( strokes == par + 2) {
     return names[5]
   }
  
  
    else {
      return names[6];
    }

}




























































