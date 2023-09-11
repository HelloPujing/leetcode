/*
给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
必须在不使用库内置的 sort 函数的情况下解决这个问题。

示例 1：
输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
示例 2：

输入：nums = [2,0,1]
输出：[0,1,2]

两个指针，left指针左边为0，right指针右边为2，遇到0往左边扔，遇到1往右边扔
*/

function sortColors(nums: number[]): void {
    let left = 0, right = nums.length - 1;
    for (let i = 0; i <= right;) { // current;
        const v = nums[i];
        if (v === 0) {
            if (i === left) {
                left++;
            } else {
                [nums[i], nums[left]] = [nums[left], nums[i]];
                left++;
            }
            i++;
        } else if (v === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        } else {
            i++;
        }
    }
};