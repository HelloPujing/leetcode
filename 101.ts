/*
对称二叉树
分析：
一、递归法，两棵树径向，首先值相等，其次左子树 = 右子数
二、广度遍历，再压栈
*/
import { TreeNode } from "./type/treeNode";

function isSymmetric(root: TreeNode<number> | null): boolean {
    if (!root) return true;

    return equal(root.left, root.right);
};

function equal(node1: TreeNode<number> | null, node2: TreeNode<number> | null): boolean {
    if(node1 === null || node2 === null) return node1 === node2;

    return node1.val === node2.val && equal(node1.left, node2.right) && equal(node1.right, node2.left);
}

const node1 = new TreeNode(1);
node1.left = new TreeNode(2);
node1.right = new TreeNode(3);

console.log(isSymmetric(node1));
