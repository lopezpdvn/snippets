'use strict'; const log =console.log; (async ()=>{

// The kind of type of `Easing` is
// string literal type.
type Easing = "ein" | "eout" | "einout";

const doWithEase = (ease: Easing) : void => {
  if     (ease === "ein")    return null;
  else if(ease === "eout")   return null;
  else if(ease === "einout") return null;
  else
    // unreachable code
    return null;
};

doWithEase("ein");
doWithEase("eout");
doWithEase("einout");
doWithEase("hi");

})();