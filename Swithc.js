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
  