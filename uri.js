let uri = "my test.asp?name=staler&car=saab";
let result = encodeURI(uri);

console.log(uri);
console.log(result);

let result2 = decodeURI(uri);
console.log(result2);
