#include <stdio.h>

int main(void) {
  int a = 5;
  printf("%d\n", a);
  
  int *b = NULL;
  b = &a;
  (*b)++;
   
  printf("%d\n", a);
   
  return 0;
}

// 5
// 6
