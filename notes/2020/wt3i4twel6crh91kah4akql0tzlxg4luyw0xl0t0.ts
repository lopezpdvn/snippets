'use strict'; const log =console.log; (async ()=>{

class Department {
  constructor(public name: string) {} }

class Accounting extends Department {
  constructor() { super('Accounting & Auditing');}
  meet(): void { log('meetings Mondays @10am.'); } }

const department : Accounting = new Accounting();
(department as Department).meet();

// tsc
// tmp.ts:13:28 - error TS2339: Property 'meet'
// does not exist on type 'Department'.

// 13 (department as Department).meet();
//                               ~~~~
// Found 1 error.

})();