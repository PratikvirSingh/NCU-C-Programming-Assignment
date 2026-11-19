#include <stdio.h>
int main(void) {
    int n; scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int s = 1; s < i; s++) putchar(' ');
        for (int j = 1; j <= 2 * (n - i) + 1; j++) putchar('*');
        putchar('\n');
    }
    return 0;
}
