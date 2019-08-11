public static void mergesort(int[] array) {
  int[] helper = new int[array.length];
  mergesort(array, helper, 0, array.length - 1);
}

public static void mergesort(
  int[] array, int[] helper, int low, int high) {
  if(low >= high) return;
  int middle = (low + high) / 2;
  mergesort(array, helper, low, middle);
  mergesort(array, helper, middle + 1, high);
  merge(array, helper, low, middle, high);
}
