// Logical Operators are used to perform logical operations and include AND, OR, or NOT. Boolean Operators include AND, OR, XOR, or NOT and can have one of two values, true or false.
/*AND, &&
OR, ||
NOT, !*/

let word1 = false;
let word2 = true;
console.log(word1 && word2);// AND operator
console.log(word1 || word2);// OR operator
console.log(!word1, !word2);// NOT operator

let num1 = 10;
let num2 = 8;
let num3 = 11;
let num4 = 11;
console.log((num1 > num2) && (num3 == num4));
