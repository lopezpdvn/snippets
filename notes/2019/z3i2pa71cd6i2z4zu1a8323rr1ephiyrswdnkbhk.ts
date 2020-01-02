'use strict'; const log =console.log; (async ()=>{

abstract class Department {
  constructor(public name: string) {}
  printName(): void { log(`${this.name}`); }
  abstract meet(): void;
}

class Accounting extends Department {
  constructor() { super('Accounting & Auditing');}
  meet(): void { log('meetings Mondays @10am.'); }
  genRpts(): void { log('Generating reports...');}
}

const department: Department /*or Accounting*/ =
  new Accounting();
department.meet();

// Output
// meetings Mondays @10am.

})();