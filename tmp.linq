<Query Kind="Program">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
void Main() { SequenceEqualEx2(); }
class Pet {
  public string Name { get; set; }
  public int Age { get; set; }
}

public static void SequenceEqualEx2()
{
  var pet1 = new Pet() { Name="Turbo", Age=2 };
  var pet2 = new Pet() { Name="Peanut", Age=8 };
  var pets1 = new List<Pet> { pet1, pet2 };
  var pets2 = new List<Pet> {
    new Pet { Name = "Turbo", Age = 2 },
    new Pet { Name = "Peanut", Age = 8 } };
  var pets3 = new[] {pet1, pet2};

  bool eq0 = pets1.SequenceEqual(pets2);
  ("pets1 and pets2 are " + (eq0 ? "" : "not ")
    + "equal.").Dump();
  var eq1 = pets3.SequenceEqual(pets1);
  ("pets1 and pets3 are " + (eq1 ? "" : "not ")
    + "equal.").Dump();
}