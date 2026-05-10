function checkDoublons(nums)
{
    const newNums = new Set(nums);
    if (nums.length > newNums.size)
        return true;
    return false;
}