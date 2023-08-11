/* 
二叉树的层序遍历
分析：
逐层，BFS，队列实现
*/

import { TreeNode } from "../type/treeNode";

function levelOrder(root: TreeNode<number> | null): number[][] {
    const ans: any[] = [];
    if (!root) return ans;

    const q = [];
    q.push(root);
    while (q.length) {
        ans.push([]);
        const currentLevelSize = q.length; // 巧妙之处在于每次循环前就取出大小，这样就可以继续往q里塞值
        const currentIndex = ans.length - 1; // 巧妙之处在于每次循环都已经定位好index
        for (let i = 0; i < currentLevelSize; i++) {
            const node = q.shift();
            ans[currentIndex].push(node?.val);
            if (node?.left) q.push(node.left);
            if (node?.right) q.push(node.right);
        }
    }

    return ans;
};

levelOrder(null);