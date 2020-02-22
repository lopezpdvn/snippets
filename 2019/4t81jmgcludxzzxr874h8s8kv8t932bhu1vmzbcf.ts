'use strict'; const log =console.log; (async ()=>{

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
}

// tsc
// tmp.ts:4:12 - error TS2564: Property 'name'
// has no initializer and is not definitely
// assigned in the constructor.

//const dad = new Octopus('Man with the 8 strong legs');
// dad.name = "Man with the 3-piece suit"; // error! name is readonly
// dad.numberOfLegs = 3;

})();
