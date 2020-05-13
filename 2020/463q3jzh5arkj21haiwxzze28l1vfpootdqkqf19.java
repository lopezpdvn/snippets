// This prints Fibonacci numbs from O to n.

void allFib(int n) {
  for (int i= 0; i < n; i++) {
    System.out.println(i + ": "+ fib(i));
  }
}

int fib(int n) {
  if (n <= 0) return 0;
  else if (n == 1) return 1;
  return fib(n - 1) + fib(n - 2);
} 

// Time complexity: O(2^n)
