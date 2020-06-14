#include <stdio.h>
#include <string.h>

void displayMatrix(int m, int n, char x[m][n]) {
  for(int i = 0; i < m; i++) {
    for(int j = 0; j < n; j++) {
      printf("%c ", x[i][j]);
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
