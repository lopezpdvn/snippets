import java.util.HashMap;
import java.util.Map;

class Note {
  public static void main(String[] args) {
    String x = "abcaabd";

    // Frequency counter with hash table
    HashMap<Character, Integer> count =
      new HashMap();
    for (char c: x.toCharArray()) {
      count.put(c, count.getOrDefault(c,0) + 1);
    }

    for(Map.Entry kv : count.entrySet()){
      String disp = kv.getKey().toString() +
                 ": " + kv.getValue().toString();
      System.out.println(disp);
    }
  }
}