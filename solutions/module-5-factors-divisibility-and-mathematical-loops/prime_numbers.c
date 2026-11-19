#include <stdio.h>
int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; i <= n / i; i++)
        if (n % i == 0) return 0;
    return 1;
}
int main(void) {
    int n;
    scanf("%d", &n);
    for (int i = 2; i <= n; i++)
        if (isPrime(i)) printf("%d\n", i);
    return 0;
}
