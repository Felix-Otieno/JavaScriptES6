// A for-in loop is a control structure that allows you to iterate over the enumerable properties of an object. This loop is used to access the keys of an object one by one.
let amazingObject = {a:1, b:2, c:3, d:4};
console.log("This is an object: ", amazingObject);
console.log(typeof(amazingObject));

for (let item in amazingObject) {
    // console.log(item);
    // console.log(amazingObject[item]);
    console.log(item + ":" + amazingObject[item]);
}

//Item is simply the key in the object.
