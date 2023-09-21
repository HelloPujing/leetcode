import { ListNode } from "../type/listNode";

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let even = head.next;
    let oddP = head;
    let evenP = head.next;

    while (evenP && evenP.next) {
        oddP.next = evenP.next;
        oddP = oddP.next;

        evenP.next = oddP.next;
        evenP = evenP.next!;
    }

    oddP.next = even;

    return head;
};

