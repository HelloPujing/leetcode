/* 
验证二叉搜索树
分析：
时间复杂度：O(n)
空间复杂度：O(n)
 */

import { TreeNode } from "./type/treeNode";

function isValidBST(root: TreeNode<number> | null): boolean {
    if(!root) return true;
    return isValidSubBST(root, -Infinity, Infinity);
}

function isValidSubBST(node: TreeNode<number> | null, lower: number, upper: number): boolean {
    if(!node) return true;
    
    if(node.val <= lower || node.val >= upper) return false;

    return isValidSubBST(node.left, lower, node.val) && isValidSubBST(node.right, node.val, upper);
};