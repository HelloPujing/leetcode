/* 
二叉树的序列化与反序列化

序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
提示: 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。
*/

import { TreeNode } from "../type/treeNode";

/*
 * Encodes a tree to a single string.
层序遍历用链表
第0层，个数有1个，2的0次方
第1层，个数有2个，2的1次方
第2层，个数有4个，2的2次方
第3层，个数有8个，2的3次方
第4层，个数有16个，2的4次方
 */

// function serialize(root: TreeNode<number> | null): string {
//     let ans = [];
//     let dep = 0;
//     let len = Math.pow(2, dep);
//     const depNodes = [root];
//     let hasNode = !!root;

//     while (hasNode) {
//         hasNode = false;
//         // console.log('-------');
//         // console.log(dep, len, depNodes);
//         // console.log(ans);
//         for (let i = 0; i < len; i++) {
//             const node = depNodes[i];
//             ans.push(node?.val || null);

//             if (node?.left || node?.right) {
//                 hasNode = true;
//             }

//             node?.left ? depNodes.push(node.left) : depNodes.push(null)
//             node?.right ? depNodes.push(node.right) : depNodes.push(null)
//         }
//         depNodes.splice(0, len);
//         dep++;
//         len = Math.pow(2, dep);
//     }
//     return ans.join(',');
// };

function serialize(root: TreeNode<number> | null): string {
    const depNodes = [root];
    let ans = [root?.val || null];
    let hasNode = !!root;

    while (hasNode) {
        hasNode = false;
        const len = depNodes.length; // 当前层的长度
        // console.log('-------');
        // console.log(dep, len, depNodes);
        // console.log(ans);
        for (let i = 0; i < len; i++) {
            const node = depNodes[i];

            if (node?.left || node?.right) {
                hasNode = true;
            }

            node?.left ? depNodes.push(node.left) && ans.push(node.left.val) : ans.push(null)
            node?.right ? depNodes.push(node.right) && ans.push(node.right.val) : ans.push(null)
        }
        depNodes.splice(0, len);
    }
    return ans.join(',');
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode<number> | null {
    if (!data) return null;

    const dataArr = data.split(',');
    let ans = null;

    let dep = 0;

    const prevNodes: (TreeNode<number> | null)[] = [];

    while (dataArr.length) {
        const prevLen = prevNodes.length;
        const depDatas = dataArr.splice(0, prevLen * 2 || 1); // 待种


        if (dep === 0) {
            const root = depDatas[0] === 'null' ? null : new TreeNode(Number(depDatas[0]));
            ans = root;
            prevNodes.push(root);
        } else {
            for (let i = 0; i < prevLen; i++) {
                const prevLineNode = prevNodes[i];
                if (prevLineNode) {
                    const lI = 2 * i;
                    const l = depDatas[lI];
                    const r = depDatas[lI + 1];
                    const lNode = (!l || l === 'null') ? null : new TreeNode(Number(l));
                    const rNode = (!r || r === 'null') ? null : new TreeNode(Number(r))
                    prevLineNode.left = lNode;
                    prevLineNode.right = rNode;
                    lNode && prevNodes.push(lNode);
                    rNode && prevNodes.push(rNode);
                }


            }
        }

        prevNodes.splice(0, prevLen)
        dep++;
    }

    return ans;
};

const root = new TreeNode(1);
root.left = new TreeNode(21);
root.right = null;
root.left.left = new TreeNode(31);
root.left.right = new TreeNode(32);

console.log(serialize(root))

// console.log(deserialize('0,11,12,31,null,null,34'))

// console.log(deserialize('1,2,null'))


