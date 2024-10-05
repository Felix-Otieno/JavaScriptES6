let num1 = 2;
let num2 = 0;

try {
    if (num2 === 0) {
        throw("You can not divide by zero");
    } else {
        console.log(num1 / num2);
    }
}
catch (error) {
    console.log(error);
}

finally {
    console.log("This code is immmortal!!!");
}