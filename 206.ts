/* 
    反转链表

    方法一：遍历，压栈出栈

    方法二：递归
*/

import { ListNode } from "./type/listNode";
import { Stack } from "./type/stack";

function reverseList(head: ListNode | null): ListNode | null {
    if(!head) return head;

    const stack = new Stack<number>();
    let p = head;

    while(!!p) {
        stack.push(p.val);
        p = p.next!;
    }

    p = head;
    while(!stack.isEmpty()){
        p.val = stack.pop()!;
        p = p.next!;
    }

    return head;
};