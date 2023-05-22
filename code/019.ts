/* 
删除链表的倒数第 N 个结点

方法一：一次遍历+hash存储
O(n)
O(n)

优化：双指针间隔n
O(n)
O(1)

*/

import { ListNode } from "./type/listNode";


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if(!head) return null;

    const map = new Map();
    let node: ListNode | null = head;

    for (let i = 1; node; node = node.next, i++) {
        map.set(i, node);
    }

    const len = map.size;
    if(len === n) return map.get(2) || null;

    const pre = map.get(map.size - n);
    pre.next = pre.next.next;

    return head;
};

