'use strict'; const log =console.log; (async ()=>{

class Employee {
  constructor(
    public name: string,
    public salary: number){}
}

type EmployeePredicate =
  (e: Employee) => boolean;

})();