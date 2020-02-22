class BitManipulation {
  public static boolean getBit(int num, int i) {
    return ((num & (1 << i)) != 0);
  }
}