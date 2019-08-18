class BitManipulation {
  
  public static int clearBit(int num, int i) {
    int mask = ~(1 << i);
    return num & mask;
 
  }
}
