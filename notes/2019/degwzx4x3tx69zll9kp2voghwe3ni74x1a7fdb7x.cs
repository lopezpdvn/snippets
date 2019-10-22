<Query Kind="Program">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
static string GetArea(object shape) {
  if (shape is Square s)
    return "Square GetArea";
  else if (shape is Circle c)
    return "Circle GetArea";
  else if (shape is Rectangle r)
    return "Rectangle GetArea";
  return "Unrecognized type";
}
void Main() {
  var q = new object[] {
    new Square { Side   = 2.0 },
    new Circle { Radius = 3.0 },
    new Rectangle {Length = 2, Height = 3},
    new Triangle {Base = 2, Height = 3},
    2
  };
  foreach(var x in q) GetArea(x).Dump();
}
class Square { public double Side; }
class Circle { public double Radius; }
struct Rectangle {
                public double Length, Height; }
class Triangle { public double Base, Height; }