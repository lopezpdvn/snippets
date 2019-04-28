'use strict';
const log = console.log;

(async () => {
const response =
  await Promise.reject(3)
    .then(() => log('unreached'))
    .catch(err => log(err));
log(response === undefined);
})();

// 3
// true
