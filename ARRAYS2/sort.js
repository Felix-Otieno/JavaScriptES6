//It sorts the elements of an array in place (modifies the original array) and returns the sorted array. By default, it sorts elements as strings in ascending order.
let numbers = [40, 100, 1, 5, 25];
numbers.sort(); // Sorts the array lexicographically as [1, 100, 25, 40, 5]
console.log(numbers);
numbers.sort((a, b) => a - b);// Sorts numerically: [1, 5, 25, 40, 100]
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers); 
