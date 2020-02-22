'use strict'; const log =console.log; (async ()=>{

const propRet =
  <T, K extends keyof T>
    (obj: T, key: K): T[K] =>
      obj[key];

const xSym = Symbol();
const todo = {
  id    : 1                     ,
  text  : 'Buy milk'            ,
  due   : new Date(2016, 11, 31),
  [xSym]: false
};

const id   : number  = propRet(todo, 'id')  ;
const text : string  = propRet(todo, 'text');
const due  : Date    = propRet(todo, 'due') ;
const _xSym: boolean = propRet(todo, xSym);
const e:
  number | string | Date | boolean =
  propRet(todo, 'dueDate');

})();