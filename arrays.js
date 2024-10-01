// Array is collection of values
let myArray = [1, 2, 3, 4, 5, 6, 7];
console.log(myArray);
console.log(myArray.length);
console.log(myArray[3]);
console.log(myArray.toString());
console.log(myArray.join());
console.log(myArray.slice(4));
for (i = 0; i < myArray.length; i++) {
     console.log(myArray[i]);
 }
myArray.push(8);
console.log(myArray);
myArray.pop();
console.log(myArray);

myArray.unshift(0);
console.log(myArray);
myArray.shift();
console.log(myArray);
console.log(myArray.findIndex((x) => x === 3));
console.log(myArray.indexOf(5));
console.log(myArray.find((x) => x > 5));

myArray.forEach(function(element) {
    console.log(element);
});



