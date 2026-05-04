bool isNumber(char* s) {
    if (s == NULL || *s == '\0') return false;

    bool hasNum = false;
    bool hasPoint = false;
    bool hasE = false;
    bool numAfterE = true;

    while (*s == ' ') s++;

    for (int i = 0; s[i] != '\0'; i++) {
        char c = s[i];

        if (isdigit(c)) {
            hasNum = true;
            numAfterE = true;
        } 
        else if (c == '.') {
            if (hasPoint || hasE) return false;
            hasPoint = true;
        } 
        else if (c == 'e' || c == 'E') {
            hasE = true;
            numAfterE = false;
        } 
        else if (c == '-' || c == '+') {
            if (i > 0 && s[i-1] != 'e' && s[i-1] != 'E') return false;
        } 
        else if (c == ' ') {
            while (s[i] == ' ') i++;
            return (s[i] == '\0' && hasNum);
        } 
        else {
            return false;
        }
    }
    return hasNum && numAfterE;
}
