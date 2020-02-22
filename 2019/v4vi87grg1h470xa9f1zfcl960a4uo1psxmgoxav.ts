'use strict'; const log =console.log; (async ()=>{

class Animal {
  move(distanceInMeters: number = 0) {
    log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

/* Output
   Woof! Woof!
   Animal moved 10m.
   Woof! Woof!
*/ 

})();