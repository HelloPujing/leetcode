import { TreeNode } from "../type/treeNode";


/*
中序 = 左子 + 中 + 右子
*/ 

function inorderTraversal(root: TreeNode<number> | null): number[] {
    const ans: number[] = [];

    const inOrder = (root: TreeNode<number> | null) => {
        if(!root) return;
        inOrder(root.left);
        ans.push(root.val);
        inOrder(root.right);
    }

    inOrder(root);
    return ans;
};