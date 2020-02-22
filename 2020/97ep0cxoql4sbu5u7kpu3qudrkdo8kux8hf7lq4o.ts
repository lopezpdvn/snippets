'use strict'; const log =console.log; (async ()=>{

class Greeter {
  static standardGreeting = 'Hello, there';
  greeting = '';

  greet() {
    return this.greeting             ?
           `Hello, ${this.greeting}` :
           Greeter.standardGreeting; }
}

// Variable greeterMaker holds the class itself,
// or said another way its constructor function.
const greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = 'Hey there!';

const greeter2: Greeter = new greeterMaker();
log(greeter2.greet());

// Hey there!

})();