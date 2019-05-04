'use strict'; const log = console.log; (async ()=>{

const splitStr = (str2Split, sep) => {
  const arrOfStrs = str2Split.split(sep);

  log('The original str is: "' + str2Split + '"');
  log('The sep is: "' + sep + '"');
  log('The array has ' + arrOfStrs.length
      + ' elements: ' + arrOfStrs.join(' / '));
}

const monthStr = 'Jan,Feb,Mar,Apr,May,Jun'
               + ',Jul,Aug,Sep,Oct,Nov,Dec';

const comma = ',';

splitStr(monthStr, comma);

})();
