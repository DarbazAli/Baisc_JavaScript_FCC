/* 
    Selecting from Many Options with Switch Statements
    case values are tested with strict equality (===)
    break tells JavaScript to stop executing statements. 
    If the break is omitted, the next statement will be executed.
*/

function caseInSwitch(val) {
    let answer = "";

    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;

        case 3:
            answer = "gamma";
            break;

        case 4:
            answer = "delta";
            break;
    }
    return answer
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));



/* 
    Adding default statement to the switch case statment;
    defatul statement is imprtant when there was no match for any case;
*/

function getTheword(letter) {
    let answer = "";
    switch (letter) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default: // we use default statement, becasue we cant define every case for every letter
            answer = "stuff";
            break;
    }
    return answer;
}






/* 
    Multiple Identical Options in Switch Statements
*/

function sequentialSizes(val) {
    var answer = "";

    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break
        // all 3 cases return same result, becaue the break st is ommited
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;

      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }

    return answer;
  }




  /* 
    Replacing If Else Chains with Switch
    If you have many options to choose from, 
    a switch statement can be easier to write than many chained if/else if statements.
  */


 function chainToSwitch(val) {
    var answer = "";
  
    // if (val === "bob") {
    //   answer = "Marley";
    // } else if (val === 42) {
    //   answer = "The Answer";
    // } else if (val === 1) {
    //   answer = "There is no #1";
    // } else if (val === 99) {
    //   answer = "Missed me by this much!";
    // } else if (val === 7) {
    //   answer = "Ate Nine";
    // }
    
    // Replacing the above code to the below

    switch (val) {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;
    }
  
    return answer;
  }
  
  console.log(chainToSwitch(7));
  




  /* 
    Returning Boolean Values from Functions
    function isEqual(a,b) {
        return a === b;
    }
  */

  function isLess( a, b ) {
      return a < b;
  }


  console.log(isLess(5, 10));
  console.log(isLess(5, 5));
  console.log(isLess(10, 5));
  



  /* 
    Return Early Pattern for Functions
    When a return statement is reached, the execution of the current function stops
  */

 function myFun() {
    console.log("Hello");
    return "World";
    // the func will never see this line, becaue the retrun statement declared
    console.log("byebye")
  }

  myFun()







/* 
    Algorithm Scripting: Counting Cards
    count ++ if card is one of ( 2, 3, 4, 5, 6 );
    count = 0 if card is one of ( 7, 8, 9)
    count -- if card is one of ( 10, 'J', 'Q', 'K', 'A')
*/
  
function cc(card) {
    var count = 0;

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }

  if ( count > 0 ) {
    return count + " Bet";
  }
  else if ( count <= 0) {
    return count + " Hold"
  }
  
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

console.log(cc(2));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));


