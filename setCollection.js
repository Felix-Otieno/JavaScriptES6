// A JavaScript Set is a collection of unique values
let mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet);
console.log(mySet.has(5));
console.log(mySet.has(9));
for (let item of mySet) {
    console.log(item);
}