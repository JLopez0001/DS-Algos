/*

Given the head of a singly linked list, return the 
middle node of the linked list.

If there are two middle nodes, return the second 
middle node.

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.


Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


  ListNode} head
 {ListNode}
 */

function middle(head) {
  let tail = head;
  let length = 0;
  let mid = 0;
  let count = 0;

  while (tail !== null) {
    tail = tail.next;
    length++;
  }

  if (length % 2 === 0) {
    mid = Math.ceil((length + 1) / 2);
  } else {
    mid = Math.ceil(length / 2);
  }

  while (head !== null) {
    if (mid - 1 === count) {
      return head;
    } else {
      count++;
      head = head.next;
    }
  }
}

function middle(ll) {
  let slow = ll;
  let fast = ll;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
