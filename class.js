// Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes. For more examples and explanations, see the Using classes guide.
class Car {
 constructor(x , y) {
    console.log("x is position: " + x);
    console.log("y is position: " + y);
    console.log("This is a costructor");
 }
}
let carObject = new Car(50, 70);