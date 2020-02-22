<Query Kind="Program">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
void Main() {
  var people = new object[] {
    new Person("Pedro", "Ivan" , "Lopez"),
    new Person("Paul" , "Andre", "Lopez"),
    new StringBuilder()     };
  foreach(var p in people) Display(p).Dump();
}

// Below is called positional pattern matching.
static string Display(object o) => o switch {
  Person("Pedro", "Lopez") => "me",
  Person(var fst, var lst) => $"{lst}, {fst}",
  _                        => "other"
};

// (output)
// me
// Lopez, Paul
// Garcia, John
class Person {
  public string FirstName { get; set; }
  public string MiddleName { get; set; }
  public string LastName { get; set; }
  
  public Person(
    string fname, string mname, string lname) {
    FirstName = fname; MiddleName = mname;
    LastName = lname; }

  public void Deconstruct(
    out string fname, out string lname) {
    fname = FirstName;
    lname = LastName; }
}