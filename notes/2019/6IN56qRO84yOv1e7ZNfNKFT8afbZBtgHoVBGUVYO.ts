'use strict'; const log =console.log; (async ()=>{

interface Bird { layEggs(); fly();  }
interface Fish { layEggs(); swim(); }

const getSmallPet = () : Fish | Bird => ({
  fly:     () => null,
  layEggs: () => null
});

const pet = getSmallPet();

if (pet.swim) {
  pet.swim();
}
else if (pet.fly) {
  pet.fly();
}

})();