#include <stdio.h>
int main(void) {
    int L, n, w, h;
    scanf("%d", &L);
    scanf("%d", &n);
    while (n--) {
        scanf("%d %d", &w, &h);
        if (w < L || h < L) printf("UPLOAD ANOTHER\n");
        else if (w == h) printf("ACCEPTED\n");
        else printf("CROP IT\n");
    }
    return 0;
}
