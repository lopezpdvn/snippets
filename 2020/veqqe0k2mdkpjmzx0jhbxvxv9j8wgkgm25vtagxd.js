'use strict'; const log = console.log; (async ()=>{

const cart = [ { name: 'Widget', price: 9.95 },
               { name: 'Gadget', price: 22.95}];
const names = cart.map(x => x.name);
const prices = cart.map(x => x.price);
const discountPrices = prices.map(x => x*0.8);
const lcNames = names.map(e => e.toLowerCase());

log(names);
log(prices);
log(discountPrices);
log(lcNames);
// [ 'Widget', 'Gadget' ]
// [ 9.95, 22.95 ]
// [ 7.96, 18.36 ]
// [ 'widget', 'gadget' ]

})();
