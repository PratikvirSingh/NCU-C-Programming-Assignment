#include <stdio.h>
int main(void) {
    int arrivalTime, delayedTime;
    scanf("%d %d", &arrivalTime, &delayedTime);
    printf("%d\n", (arrivalTime + delayedTime) % 24);
    return 0;
}
