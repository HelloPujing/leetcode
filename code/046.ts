/* 
全排列:
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
*/


function permute(nums: number[]): number[][] {
    const ans: number[][] = [];

    if (nums.length === 1) {
        ans.push(nums);
        return ans;
    }

    for (let i = 0; i < nums.length; i++) {
        const numbers = nums.concat();
        const v = nums[i];
        numbers.splice(i, 1);
        permute(numbers).forEach(subAns => {
            ans.push([v, ...subAns])
        })
    }

    return ans;
};