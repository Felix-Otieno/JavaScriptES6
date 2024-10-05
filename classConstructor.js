class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    saySomething() {
        console.log("This is great");
    }
}
const carObj = new Car("Toyota", "Corrolla");
carObj.saySomething();
console.log(carObj.brand);
console.log(carObj.model);