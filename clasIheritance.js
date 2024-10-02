// In programming, inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one.
class Vehicle {
    constructor(x , y) {
        console.log("x is position: " + x);
        console.log("y is position: " + y);
        console.log("This is a costructor");
        this.x = x;
        this.y = y;
       
     }
     vehicleFunc() {
        console.log("This function is from vehicle class");
     }
}


class Car extends Vehicle {
    
    EpicFun () {
        console.log("This is an epic fun");
       }
    static staticFun() {
        console.log("This is epicly static.");
    }   
   }
   class Bike extends Vehicle {

   }
   let carObject = new Car(50, 70);
   let carObject2 = new Car(80, 90);

   let bikeObj = new Bike(0, 0);
   bikeObj.vehicleFunc()

   let isValid = carObject instanceof Car;
   let isValid2 = bikeObj instanceof Car

   console.log(isValid);
   console.log(isValid2);