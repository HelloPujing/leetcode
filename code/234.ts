/* 
回文链表
思路：
1.快慢指针，取到链表的中间和末尾
2.后半链表反转
3.比较回文
4.链表反转
*/

import { ListNode } from "./type/listNode";

// 206 反转链表
function reverseList(head: ListNode | null): ListNode | null {
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

function isPalindrome(head: ListNode | null): boolean {
    // size = 0 | 1 | 2
    if(!head || !head.next) return true; 
    if(!head.next.next) return head.val === head.next.val;
    
    // size = 3
    let fast = head;
    let slow = head;

    while(fast.next && fast.next.next) {
        fast = fast.next.next!;
        slow = slow.next!;
    }

    
    // if(fast.next === null) { // 奇数，slow是中间数，fast最后数 
    // } else { // 偶数，slow是左侧最后一个数，fast是右侧倒数第二个数
    // }

    // 上述两种情况，右链表都从slow.next开始
    let r = reverseList(slow.next);
    let l = head;
    
    while(r) {
        if(r.val !== l.val) return false;
        l = l.next!;
        r = r.next;
    }

    return true;
};

