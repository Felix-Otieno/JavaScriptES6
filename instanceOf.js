class Car {
    constructor(x , y) {
       console.log("x is position: " + x);
       console.log("y is position: " + y);
       console.log("This is a costructor");
       this.x = x;
       this.y = y;
      
    }
    EpicFun () {
        console.log("This is an epic fun");
       }
    static staticFun() {
        console.log("This is epicly static.");
    }   
   }
   class Bike {

   }




   let carObject = new Car(50, 70);
   let carObject2 = new Car(80, 90);

   let bikeObj = new Bike();

   let isValid = carObject instanceof Car;
   let isValid2 = bikeObj instanceof Car

   console.log(isValid);
   console.log(isValid2);

   //InstanceOf operator used to determine certain object is of particular class.