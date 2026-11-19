#include <stdio.h>
int main(void) {
    int n;
    scanf("%d", &n);
    if (n <= 1) { puts("false"); return 0; }
    int sum = 1;
    for (int i = 2; i <= n / i; i++) {
        if (n % i == 0) {
            sum += i;
            if (i != n / i) sum += n / i;
        }
    }
    puts(sum == n ? "true" : "false");
    return 0;
}
