int check_one_word(char *s)
{
    int i = 0;
    while(s[i] && s[i] <= 32)
        i++;
    while(s[i] && (s[i] >= 'a' && s[i] <= 'z' || s[i] >= 'A' && s[i] <= 'Z'))
        i++;
    while(s[i] && s[i] <= 32)
        i++;
    if (s[i] == '\0')
        return 1;
    return 0;
}

int lengthOfLastWord(char* s) {
    int i = 0;

    if (check_one_word(s) == 1)
    {
        while(s[i] && s[i] <= 32)
            i++;
        int j = 0;
        while(s[j])
            j++;
        char *copy = malloc(sizeof(char) * (j - i + 1));
        j = 0;
        while(s[i] && (s[i] >= 'a' && s[i] <= 'z' || s[i] >= 'A' && s[i] <= 'Z'))
        {
            copy[j] = s[i];
            j++;
            i++;
        }
        copy[j] = '\0';
        return j;
    }
    while(s[i])
        i++;
    while(i > 0 && s[i] <= 32)
        i--;
    while(i > 0 && (s[i] >= 'a' && s[i] <= 'z' || s[i] >= 'A' && s[i] <= 'Z'))
        i--;
    int j = 0;
    while(s[j])
        j++;
    while(j > 0 && s[j] <= 32)
        j--;
    return j - i;
}