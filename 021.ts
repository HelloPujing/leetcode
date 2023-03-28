
//  * Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(list1 === null) return list2;
    if(list2 === null) return list1;
    if(list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    if(list1.val > list2.val) {
        list2.next = mergeTwoLists(list2.next, list1);
        return list2;
    }

    return null;
};


const node11 = new ListNode(1);
const node12 = new ListNode(2);
const node13 = new ListNode(4);
const list1 = node11;
node11.next = node12;
node12.next = node13;

const node21 = new ListNode(1);
const node22 = new ListNode(3);
const node23 = new ListNode(4);
const list2 = node21;
node21.next = node22;
node22.next = node23;

const list3 = new ListNode(0);

console.log(mergeTwoLists(list1, list2)); // [1,1,2,3,4,4]
console.log(mergeTwoLists(null, null)); // []
console.log(mergeTwoLists(null, list3)); // [0]
