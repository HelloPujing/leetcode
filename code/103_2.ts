import { TreeNode } from "../type/treeNode";

// 深度遍历就递归
// 广度遍历就链表；一个数组存当前层节点（同时存下一层节点），一个数组存结果
function zigzagLevelOrder(root: TreeNode<number> | null): number[][] {
    const ans: any[] = [];
    if (!root) return ans;

    let even = false; // 偶数反向
    const q = [];
    q.push(root);

    while (q.length) {
        ans.push([]);

        const levelSize = q.length; // 提前获取size，就可以继续往q里加值
        const ansIndex = ans.length - 1; // 结果数组的index

        for (let i = 0; i < levelSize; i++) {

            const node = q.shift();
            if (node?.left) q.push(node.left);
            if (node?.right) q.push(node.right);
            if (even) {
                ans[ansIndex].unshift(node?.val);
            } else {
                ans[ansIndex].push(node?.val);
            }
        }
        even = !even;
    }
    return ans;
};

