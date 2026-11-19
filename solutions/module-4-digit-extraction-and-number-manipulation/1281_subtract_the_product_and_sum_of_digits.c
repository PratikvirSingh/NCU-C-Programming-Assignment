#include <stdio.h>
int main(void) {
    int n, sum = 0, product = 1;
    scanf("%d", &n);
    do {
        int d = n % 10;
        sum += d; product *= d; n /= 10;
    } while (n > 0);
    printf("%d\n", product - sum);
    return 0;
}
