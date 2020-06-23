const log = console.log;

function A(name) {
  this.name = name;
}

log(Object.getPrototypeOf(A.prototype)
  .constructor === Object)

log(Object.getPrototypeOf(A.prototype)
               === Object.prototype)

// true
// true
