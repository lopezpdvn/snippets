'use strict'; const log =console.log; (async ()=>{

const greetMe: (msg: string) => void;
greetMe = msg => log(msg);
greetMe("hello world");

})();