function divide(num1, num2) {
    let promise = new Promise(function(resolve, reject) {
        if (num2 !== 0) {
            resolve(num1/num2);
        } else {
            reject("No zero allowed");
        }
    });
    return promise;
    
}
divide(5, 2)
.then(function(result) {
    console.log(result);
}, function(err) {
    console.log(err);
});