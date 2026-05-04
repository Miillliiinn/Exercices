int singleNumber(int* nums, int numsSize) {
    int i = 0;
    int nbr = 0;
    int int_double=0;
    int check = 0;
    while(check < numsSize)
        check++;
    if (check == 1)
        return nums[0];
    while(i < numsSize)
    {
        int j = 0;
        int_double = 0;
        while(j < numsSize)
        {
            if (i != j)
            {
                if (nums[i] == nums[j])
                {
                    int_double = 1;
                    break;
                }
            }
            j++;
        }
        if (int_double == 0)
            return nums[i];
        i++;
    }
    return 0;
}