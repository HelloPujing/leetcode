/* 将有序数组转换为二叉搜索树 */

import { TreeNode } from "../type/treeNode";

// 递归
function sortedArrayToBST(nums: number[]): TreeNode<number> | null {
    const midIndex = Math.floor(nums.length / 2);
    const left = nums.splice(0, midIndex);
    const mid = nums.splice(0, 1)[0];
    const right = nums;

    const ans = new TreeNode(mid);
    if(!left || left.length === 0){
        ans.left = null;
    }else if(left.length === 1){
        ans.left = new TreeNode(left[0]);
    }else{
        ans.left = sortedArrayToBST(left);
    }

    if(!right || right.length === 0){
        ans.right = null;
    }else if(right.length === 1){
        ans.right = new TreeNode(right[0]);
    }else{
        ans.right = sortedArrayToBST(right);
    }

    return ans;
};

function sortedArrayToBST2(nums: number[]): TreeNode<number> | null {
    if(nums.length === 0) return null;

    const midIndex = Math.floor(nums.length / 2);
    const ans = new TreeNode(nums[midIndex]);
    ans.left = sortedArrayToBST(nums.slice(0, midIndex));
    ans.right = sortedArrayToBST(nums.slice(midIndex + 1));

    return ans;
};



sortedArrayToBST2([1,2,3,4,5,6,7,8,9,10]);