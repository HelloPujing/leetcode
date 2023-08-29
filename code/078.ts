/*
【子集】
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

ans = [[], [1], [2], [1, 2]]
v=1: [1]
v=2: [2] , [1, 2]  
v=3:


示例 2：

输入：nums = [0]
输出：[[],[0]]
*/

function subsets(nums: number[]): number[][] {
    if (nums.length === 1) return ([[], nums]);

    const ans: number[][] = [[]];

    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        const l = ans.length;
        for (let j = 0; j < l; j++) {
            const subArr = ans[j].concat();
            subArr.push(v);
            ans.push(subArr);
        }
    }
    return ans;
};

subsets([1, 2])

