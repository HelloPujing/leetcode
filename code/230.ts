/* 
二叉搜索树中第K小的元素

给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。


思考：
- 遍历二叉树 + 排序？（存k长度的排序数组，如果小于最后一个数，插入）


*/

import { TreeNode } from "../type/treeNode";

function kthSmallest(root: TreeNode<number> | null, k: number): number {
    let min = -1;

    return min
};