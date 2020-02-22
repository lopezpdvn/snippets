public static void quickSort(
                 int[] arr, int left, int right) {
  int index = partition(arr, left, right); 
  if (left < index - 1) // Sort left half
    quickSort(arr, left, index - 1);
  if (index < right)    // Sort right half
    quickSort(arr, index, right);
}
