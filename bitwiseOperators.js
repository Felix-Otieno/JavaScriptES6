// Bitwise operators in JavaScript operate on 32-bit operands. Internally, JavaScript converts 64-bit floating point numbers into 32-bit signed integers before performing the operation, it then converts back to 64-bit numbers to return the result.
let num1 = 12;
let num2 = 8;

//AND operator &
console.log(num1 & num2);