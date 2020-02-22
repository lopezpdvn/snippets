'use strict'; const log =console.log; (async ()=>{

interface Todo {
  id: number;
  text: string;
  due: Date;
}

// type K = 'id' | 'text' | 'due'
type K = keyof Todo;


})();