'use strict'; const log =console.log; (async ()=>{

interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  return {
    fly: () => null,
    layEggs: () => null
  };
}

// pet :: Fish | Bird
const pet = getSmallPet();
pet.layEggs();
pet.fly();
  
})();