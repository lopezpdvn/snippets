'use strict'; const log =console.log; (async ()=>{

interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

const myIdentity: GenericIdentityFn<number> =
  identity;

log(identity('abc'));
log(identity(1));
//log(myIdentity('abc'));
log(myIdentity(1));

})();