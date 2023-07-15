import { ListNode } from "../type/listNode";

function getIntersectionNode1(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const set = new Set();
    let p = headA;

    while(p){
        set.add(p);
        p = p.next;
    }

    p = headB;
    while(p){
        if(set.has(p)){
            return p;
        }
        p = p.next;
    }

    return null;
};


// 走到尽头见不到你，于是走过你来时的路，等到相遇时才发现，你也走过我来时的路。
// 对的人错过了还是会相遇， 错的人相遇了也是NULL
// pA: A + B
// pB: B + A
// 链表技巧，节点量化
function getIntersectionNode2(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if(!headA || !headB) return null;

    let pA = headA, pB = headB;

    while(pA !== pB) {
        pA = pA === null ? headB : pA.next!;
        pB = pB === null ? headA : pB.next!;
    }

    return pA;
};