/* 
删除链表中的节点
*/

import { ListNode } from "./type/listNode";


function deleteNode(node: ListNode | null): void {
    if(!node) return;

    node.val = node.next!.val;
    node.next = node.next?.next || null;
};