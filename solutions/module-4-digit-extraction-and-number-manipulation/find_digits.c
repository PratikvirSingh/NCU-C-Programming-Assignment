#include <stdio.h>
int main(void) {
    int t;
    scanf("%d", &t);
    while (t--) {
        int n, temp, count = 0;
        scanf("%d", &n);
        temp = n;
        while (temp > 0) {
            int d = temp % 10;
            if (d != 0 && n % d == 0) count++;
            temp /= 10;
        }
        printf("%d\n", count);
    }
    return 0;
}
