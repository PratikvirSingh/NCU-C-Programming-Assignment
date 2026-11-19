#include <stdio.h>
int main(void) {
    int num, steps = 0;
    scanf("%d", &num);
    while (num > 0) {
        if (num % 2 == 0) num /= 2;
        else num--;
        steps++;
    }
    printf("%d\n", steps);
    return 0;
}
