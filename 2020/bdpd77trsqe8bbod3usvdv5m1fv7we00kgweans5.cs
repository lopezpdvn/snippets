<Query Kind="Program">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
class Person {
  public string FirstName  { get; set; }
  public string MiddleName { get; set; }
  public string LastName   { get; set; }

  public Person(
    string fname, string mname, string lname) {
    FirstName = fname; MiddleName = mname;
    LastName = lname; }

  public void Deconstruct(
    out string fname, out string lname) {
    (fname, lname) = (FirstName, LastName);} 
}
void Main() {
  var p = new Person("Pedro", "Ivan", "Lopez");
  var (firstName, lastName) = p;
  foreach(var x in new[]{firstName, lastName})
    x.Dump();
}
// Pedro
// Lopez
