interface Colorful { color:  string; }
interface Circle   { radius: number; }

// This is called intersection type.
type ColorfulCircle = Colorful & Circle;

function draw(circle: ColorfulCircle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: "blue", radius: 42 });
draw({ color: "red", raidus: 42 });

/* Argument of type '{ color: string; raidus: number; }' is not assignable to parameter of type 'ColorfulCircle'.
  Object literal may only specify known properties, but 'raidus' does not exist in type 'ColorfulCircle'. Did you mean to write 'radius'?
  */
