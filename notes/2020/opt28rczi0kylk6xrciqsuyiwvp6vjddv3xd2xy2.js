'use strict'; const log = console.log; (async ()=>{

const x =
  Object.seal({
    prop: () => {},
    foo: 'bar'
  });

log(x.foo);
x.foo = 'baz';
log(x.foo);
delete x.prop;

// bar
// baz
// TypeError: Cannot delete property 'prop'
//            of #<Object>

})();
