// It returns the index of the first element in the array that satisfies a provided testing function. If no elements satisfy the condition, it returns -1.
let numbers = [5, 12, 8, 130, 44];
let index = numbers.findIndex(num => num > 10); // Returns 1 (index of 12)
console.log(index);