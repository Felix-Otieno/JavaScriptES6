let re = /(\w+)\s(\w+)/;
let string = "John Smith";
let result = string.replace(re, '$2, $1');
console.log(string);
console.log(result);