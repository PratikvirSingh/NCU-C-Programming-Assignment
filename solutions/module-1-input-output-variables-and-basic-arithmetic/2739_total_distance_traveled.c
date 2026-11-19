#include <stdio.h>
int main(void) {
    int mainTank, additionalTank;
    scanf("%d %d", &mainTank, &additionalTank);
    int used = 0, extra = 0;
    while (used < mainTank) {
        int block = mainTank - used >= 5 ? 5 : mainTank - used;
        used += block;
        if (block == 5 && additionalTank > 0) {
            additionalTank--;
            extra++;
        }
    }
    printf("%d\n", (mainTank + extra) * 10);
    return 0;
}
