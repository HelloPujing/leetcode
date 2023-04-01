import { ListNode } from "./type/listNode"
let carry = 0;

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let l = null;
    let preNode = null;
    let carry = 0;

    while(l1 || l2 || carry) {
        const n = (l1?.val || 0) + (l2?.val || 0) + carry;
        const v = n % 10;

        const currentNode = new ListNode(v);
        if(!preNode){
            l = preNode = currentNode;
        }else{
            preNode.next = currentNode
        }

        // reset
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
        preNode = currentNode;
        carry = Math.floor(n / 10);
    }

    return l;
};


// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.
const n11 = new ListNode(2);
const n12 = new ListNode(4);
const n13 = new ListNode(3);
n11.next = n12;
n12.next = n13;

const n21 = new ListNode(5);
const n22 = new ListNode(6);
const n23 = new ListNode(4);
n21.next = n22;
n22.next = n23;

console.log(addTwoNumbers(n11, n21)); // 708


// 输入：l1 = [0], l2 = [0]
// 输出：[0]
const l21 = new ListNode(0);
const l22 = new ListNode(0);
console.log(addTwoNumbers(l21, l22));

// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]

