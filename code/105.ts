import { TreeNode } from "../type/treeNode"

// preorder: DLR
// inorder: LDR
function buildTree(preorder: number[], inorder: number[]): TreeNode<number> | null {
    if (preorder.length === 0) return null;

    const rootValue = preorder[0];
    const root = new TreeNode(rootValue);
    const index = inorder.findIndex(v => v === rootValue);

    root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
    root.right = buildTree(preorder.slice(index + 1), inorder.splice(index + 1));

    return root;
};

