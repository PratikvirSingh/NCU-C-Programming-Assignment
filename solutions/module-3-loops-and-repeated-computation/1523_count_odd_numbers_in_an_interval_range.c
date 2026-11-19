#include <stdio.h>
int main(void) {
    int low, high;
    scanf("%d %d", &low, &high);
    int count = (high - low + 1) / 2;
    if (low % 2 != 0 && high % 2 != 0) count++;
    printf("%d\n", count);
    return 0;
}
