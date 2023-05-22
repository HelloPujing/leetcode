/*  
环形链表

方法一：hash存储遍历，O(n), O(n)
方法二: 快慢指针，O(n), O(1)

*/

import { ListNode } from "./type/listNode";

function hasCycle1(head: ListNode | null): boolean {
    let p = head;
    const set = new Set();

    while(!!p) {
        if(set.has(p)){
            return true;
        }
        set.add(p);
        p = p.next;
    }

    return false;
};

function hasCycle(head: ListNode | null): boolean {
    if(head === null || head.next === null) return false;

    let slow = head;
    let fast = head.next;

    while(slow !== fast){
        if(fast === null || fast.next === null) return false;
        slow = slow.next!;
        fast = fast.next.next!;
    }

    return true;
};