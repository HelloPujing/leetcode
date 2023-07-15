/* 
二叉树的最大深度
分析：递归
时间复杂度：O(n)
空间复杂度：O(n)
 */

import { TreeNode } from "./type/treeNode";

function maxDepth(root: TreeNode<number> | null): number {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

