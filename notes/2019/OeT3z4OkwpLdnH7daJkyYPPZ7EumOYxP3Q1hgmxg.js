'use strict'; const log = console.log; (async ()=>{

const rslvAfter2Secs = () =>
  new Promise(
    rslv => setTimeout(rslv, 2000, 'rslvRT')); 
 
const asyncCall = async () => { 
  log('calling'); 
  const result = await rslvAfter2Secs(); 
  log(result); 
}; 
 
asyncCall(); 
log('after calling asyncCall');
 
// calling 
// after calling asyncCall
// <2 sec pause>
// rslvRT

})();
