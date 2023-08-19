/* 
二叉搜索树中第K小的元素

给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。


思考：
- 二叉树，二叉搜索树，是一个意思，左边子树的所有节点比根节点小，右边子树的所有节点比根节点大
- 中序遍历二叉树，让它从小到大排序排序
- 取第k个元素


*/

import { TreeNode } from "../type/treeNode";

function kthSmallest(root: TreeNode<number> | null, k: number): number {
    let min = -1;
    const q: number[] = [];

    const dfs = (root: TreeNode<number> | null) => {
        if (!root) return;

        if (q.length === k) {
            return;
        } else {
            dfs(root.left);
            q.push(root.val);
            dfs(root.right);
        }
    }

    dfs(root);

    return q[k - 1]
};

