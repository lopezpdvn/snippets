#include <stdio.h>

void displayMatrix(int a, int b, char y[a][b]) {
  for(int i = 0; i < a; i++) {
    for(int j = 0; j < b; j++) {
      printf("%c ", y[i][j]);
    }
    printf("\n");
  }
}

int main(void) {
  int m = 2;
  int n = 3;
  char x[][3] = {"abc", "def"};
  displayMatrix(m, n, x);
}

// a b c
// d e f
