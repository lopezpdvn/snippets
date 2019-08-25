public static int partition(int[] arr, int left, int right) {
  int pivot = arr[left + (right - left) / 2]; // Pick a pivot point. Can be an element    
  
  while (left <= right) { // Until we've gone through the whole array
    // Find element on left that should be on right
    while (arr[left] < pivot) left++;
    
    // Find element on right that should be on left
    while (arr[right] > pivot) right--;
    
    // Swap elements, and move left and right indices
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left; 
}
