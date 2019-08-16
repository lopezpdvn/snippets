'use strict'; const log =console.log; (async ()=>{

const buildName =
  (name1st: string, nameLast?: string) =>
    `${name1st}${nameLast ? ` ${nameLast}` : ""}`

log(buildName("Bob"));
log(buildName("Bob", "Adams", "Sr."));
log(buildName("Bob", "Adams"));

})();