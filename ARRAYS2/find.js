// It returns the value of the first element in the array that satisfies a provided testing function. If no elements match, it returns undefined.
let numbers = [5, 12, 8, 130, 44];
let found = numbers.find(num => num > 10); // Returns 12
console.log(found);