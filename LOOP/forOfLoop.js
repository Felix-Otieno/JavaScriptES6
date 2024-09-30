// A for...of loop operates on the values sourced from an iterable one by one in sequential order. Each operation of the loop on a value is called an iteration, and the loop is said to iterate over the iterable. Each iteration executes statements that may refer to the current sequence value.
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}
// In for of loop it needs the value not the index.

/*The difference between the for in loop and for of loop is that the for in loop iterates on the keys of the object while the for of loop iterates over the vales of the oobjects */

const cars = ["Van", "Hybrid", "Truck", "Wagon", "Coupe", "Convertible"];
for (const car in cars) {
    console.log(car);
}