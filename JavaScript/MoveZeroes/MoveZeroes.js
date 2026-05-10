function moveZeroes(nums)
{
    let write = 0;

    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i] !== 0)
        {
            nums[write] = nums[i];
            write++;
        }
    }

    for (let i = write; i < nums.length; i++)
    {
        nums[i] = 0;
    }
}