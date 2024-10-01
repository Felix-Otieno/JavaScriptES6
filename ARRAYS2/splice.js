//  It adds/removes elements from an array. It modifies the original array and returns an array of removed elements.
let fruits = ['Apple', 'Banana', 'Orange'];
fruits.splice(1, 1, 'Mango'); // Replaces 'Banana' with 'Mango'
console.log(fruits); // ['Apple', 'Mango', 'Orange']
