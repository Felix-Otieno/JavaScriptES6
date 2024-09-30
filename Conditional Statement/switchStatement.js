//A switch statement causes control to transfer to one labeled-statement in its statement body, depending on the value of expression.
let awesomeVar = 4;
switch(awesomeVar) {
    case 0:
        console.log("This is 0");
    break;    
    case 1:
        console.log("This is 1");
    break;
    case 2:
        console.log("This is 2");
    break;
    case 3:
        console.log("This is 3");
    break;
    case 4:
        console.log("This is 4");
    break;
    case 5:
        console.log("This is 5");
    break;
    default:
        console.log("This is the default value");
    break;

} 
// You can use the break statement to end processing of a particular labeled statement within the switch statement. It branches to the end of the switch statement. Without break , the program continues to the next labeled statement, executing the statements until a break or the end of the statement is reached.
// The default statement is executed if no case constant-expression value is equal to the value of expression . If there's no default statement, and no case match is found, none of the statements in the switch body get executed.