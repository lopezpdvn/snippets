'use strict'; const log =console.log; (async ()=>{

interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  log(labeledObj.label);
}

const x = {size: 10, label: "Size 10 Object"};
printLabel(x);

})()