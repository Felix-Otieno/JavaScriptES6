// The conditional operator (? :) is a ternary operator (it takes three operands). The conditional operator works as follows: The first operand is implicitly converted to bool . It is evaluated and all side effects are completed before continuing.
let num1 = 9;
let num2 = 90;
let ternary = (num1 == num2) ? "True" : "False";
console.log(ternary);