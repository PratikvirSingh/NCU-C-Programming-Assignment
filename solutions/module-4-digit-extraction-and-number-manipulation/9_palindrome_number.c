#include <stdio.h>
int main(void) {
    int n;
    scanf("%d", &n);
    if (n < 0) { puts("false"); return 0; }
    int original = n;
    long long reversed = 0;
    while (n > 0) { reversed = reversed * 10 + n % 10; n /= 10; }
    puts(reversed == original ? "true" : "false");
    return 0;
}
