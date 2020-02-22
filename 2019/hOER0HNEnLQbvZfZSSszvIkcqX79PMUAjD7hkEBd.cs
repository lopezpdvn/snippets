<Query Kind="Program">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
class Pet {
  public string Name { get; set; }
  public int Age { get; set; }
}
class Person {
  public string LastName { get; set; }
  public Pet[] Pets { get; set; }
}

public static void Main() {
  var people = new List<Person> {
    new Person {
      LastName = "Haas",
      Pets = new[] {
        new Pet { Name="Barley", Age=10 },
        new Pet { Name="Boots", Age=14 },
        new Pet { Name="Whiskers", Age=6 }}},
    new Person {
      LastName = "Fakhouri",
      Pets = new[] {
        new Pet { Name = "Snowball", Age = 1}}},
    new Person {
      LastName = "Antebi",
      Pets = new[] {
        new Pet { Name = "Belle", Age = 8} }},
    new Person {
      LastName = "Philips",
      Pets = new[] {
        new Pet { Name = "Sweetie", Age = 2},
        new Pet { Name = "Rover", Age = 13}}}
    };

  var names =
    from person in people
    where person.Pets.All(pet => pet.Age > 5)
    select person.LastName;

  foreach (string name in names)
    name.Dump();
}