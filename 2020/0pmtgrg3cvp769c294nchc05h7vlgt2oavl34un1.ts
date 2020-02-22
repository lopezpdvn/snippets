'use strict'; const log =console.log; (async ()=>{

const fullNameMaxLength = 10;

class Employee {
  private _fullName = '';
  // Below members are called accessors, and have
  // type signatures
  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) { // length <= 10
    if (newName.length > fullNameMaxLength)
      throw new Error(
        `max length of ${fullNameMaxLength}`);
    this._fullName = newName;
  }
}

const employee = new Employee();
employee.fullName = 'Bob Smith';
log(employee.fullName);

// Bob Smith

})();