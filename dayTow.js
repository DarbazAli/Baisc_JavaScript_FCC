/*==============================
    LESSON #4 STRING LITERALS Single quote
================================*/

const msg = 'Hello, my name is "DARBAZ"';
console.log(msg);




/*==============================
    LESSON #5 Escape Sequences
================================*/

/*
    Things we can escape with \ in javascript

        Code	Output
        \'	single quote
        \"	double quote
        \\	backslash
        \n	newline
        \r	carriage return
        \t	tab
        \b	word boundary
        \f	form feed

*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);



/*==============================
    LESSON #6 String Concatenation
================================*/

// Concatenation string with (+) Operator
const concat = "This comes first, " + "Then this one."
console.log(concat);



// Concatenation strings with (+=) Operator
let concat2 = "This is the first sentence. ";
concat2 += "This is the second sentence.";
console.log(concat2);



// Construction string with variables
let myName = "Darbaz";
let myMSG = "Hello, my name is " + myName + " and I'm a Programmer";
console.log(myMSG);



// Appending Variables to strings
let adjective = "Awesome";
let appended = "Learning programming is ";
console.log(appended += adjective);





/*==============================
    LESSON #7 STRING PROPERITES - Find the Length of a String
================================*/

let me = "Darbaz";
console.log(me.length);





























