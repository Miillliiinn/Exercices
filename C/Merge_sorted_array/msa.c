void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n) {
    
    int i = m;
    int j = 0;

    while(i < m + n)
    {   
        nums1[i] = nums2[j];
        i++;
        j++;
    }
    
    i = 0;
    while (i < m + n)
    {
        if (i < (m + n -1) && nums1[i] > nums1[i + 1])
        {
            int tmp = nums1[i];
            nums1[i]= nums1[i + 1];
            nums1[i + 1] = tmp;
            i = 0;
        }
        else
            i++;
    }
    return ;
}
