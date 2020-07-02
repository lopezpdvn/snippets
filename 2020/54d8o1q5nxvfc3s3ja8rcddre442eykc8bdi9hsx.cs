// Entity/table-record primary key-ish type/class
// Use to hold PK in memory instead of whole
// entities
sealed class UD01_PK {
  internal readonly string Company;
  internal readonly string Key1;
  internal readonly string Key2;
  internal readonly string Key3;
  internal readonly string Key4;
  internal readonly string Key5;
  internal readonly string GLAccount;
  internal readonly string GroupID;

  public UD01_PK(string company, string key1,
      string key2, string key3, string key4,
      string key5, string glAccount,
      string groupID)
  {
    Company = company;
    Key1 = key1;
    Key2 = key2;
    Key3 = key3;
    Key4 = key4;
    Key5 = key5;
    GLAccount = glAccount;
    GroupID = groupID;
  }
}
