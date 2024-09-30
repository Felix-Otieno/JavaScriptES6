let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
maximum = 0;
for (i = 1; i < myArray.length; i++) {
    if (myArray[i] > maximum) {
        maximum = myArray[i];
    }
}
console.log(maximum);