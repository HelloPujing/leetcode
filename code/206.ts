/* 
    反转链表

    方法一：遍历，压栈出栈 O(2n) O(n)
    方法二：指针反向 O(n) O(1)
    方法三：递归
*/

import { ListNode } from "../type/listNode";
import { Stack } from "../type/stack";

function reverseList1(head: ListNode | null): ListNode | null {
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


// 1  → 2  →  3 →  ∅
// ∅  ←  1  ←  2  ←  3
// prev = null
// curr = 1

// loop:
// const next = 2
// 1.next = prev
// prev = curr;
// curr = next;

// return prev

function reverseList2(head: ListNode | null): ListNode | null {
    if(!head) return head;

    let curr = head;
    let prev = null;

    while(!!curr){
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next!;
    }

    return prev;
};

// 递归
// 递归参数：下一个步骤的元素；递归中写每步都要做的事，返回新处理结果
function reverseList3(head: ListNode | null): ListNode | null {
    if(head === null || head.next === null) return head;

    const node = reverseList3(head.next);
    head.next.next = head;
    head.next = null;

    return node;
};
