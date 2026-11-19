#include <stdio.h>
int main(void) {
    int n; scanf("%d", &n);
    int half = (n + 1) / 2;
    for (int r = 1; r <= n; r++) {
        int stars = (r <= half) ? r : n - r + 1;
        int gap = 2 * (n - stars) + 1;
        for (int i = 0; i < stars; i++) putchar('*');
        for (int i = 0; i < gap; i++) putchar(' ');
        for (int i = 0; i < stars; i++) putchar('*');
        putchar('\n');
    }
    return 0;
}
