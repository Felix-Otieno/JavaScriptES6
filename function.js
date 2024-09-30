/*Function is used to execute a tasks.
Function in programming is a block of code that is executed when it is called from somewhere in a program.
Return statement used to specify the value the function should output.
Parameters are used to pass information to the function.
Arguments are used to send values to the function when it is called.
Creating function in JavaSacript you use keyword called function and then the name of the function with () then {}.
Inside the (), parantheses is where the parameters are placed.
Inside the {} is now where the execution of the function happen thus the function body.
Then for the function to work you need to call it and inside the called function the paranthese you place your arguments.
In short parameters are variables and arguments are values which are data types.
Function is also called methods.*/

function awesome() {
    console.log("Hello");
    console.log("and");
    console.log("Goodbye");
}
function addNum(num1, num2) {
    let result = num1 + num2;
    console.log(result);
}
function differenceNumbers(digit1, digit2) {
    let minus = digit1 - digit2;
    return minus;
}
awesome()
addNum(2, 3)
console.log(differenceNumbers(10, 5));