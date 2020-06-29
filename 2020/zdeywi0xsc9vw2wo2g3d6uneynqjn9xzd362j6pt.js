'use strict'; const log = console.log;

function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green']; }

SuperType.getA = function f() { return 'a'; }
SuperType.get1 = function f() { return 1; }
SuperType.var0 = 0;

SuperType.prototype.print = function f() {
  log(this.constructor.var0++);
  const x = this.constructor.getA() +
            this.constructor.get1();
  log(`My name is ${this.name}`);
  log(`From class methods ${x}`);
  log(this.constructor.var0++);
}

new SuperType('foo').print();
log();
new SuperType('bar').print();

// 0
// My name is foo
// From class methods a1
// 1
//
// 2
// My name is bar
// From class methods a1
// 3
