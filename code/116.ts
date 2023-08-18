/*
给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

层序遍历，链表
*/



import { Node } from "../type/node";
function connect(root: Node | null): Node | null {
    if (!root) return null;

    const q: Node[] = [];
    q.push(root);

    while (q.length) {
        const currentLevelSize = q.length;

        for (let i = 0; i < currentLevelSize; i++) {
            const node = q[i];
            if (i < currentLevelSize - 1) {
                node.next = q[i + 1];
            }
            if (node.left) { q.push(node.left) }
            if (node.right) { q.push(node.right) }
        }

        q.splice(0, currentLevelSize);
    }

    return root;
};