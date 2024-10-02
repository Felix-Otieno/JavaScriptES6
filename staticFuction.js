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
   let carObject = new Car(50, 70);
   console.log("(" + carObject.x + "," + carObject.y + ")" );
   console.log(carObject.x);
   console.log(carObject.y);
   carObject.EpicFun()
   Car.staticFun()