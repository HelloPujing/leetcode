/* 
二叉树的最大深度
 */

import { TreeNode } from "./type/treeNode";



function maxDepth(root: TreeNode<number> | null): number {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

