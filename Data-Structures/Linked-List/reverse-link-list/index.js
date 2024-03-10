/*

206. Reverse Linked List

Given the head of a singly linked list, reverse the 
list, and return the reversed list.

*/

function reverse(head) {
  let dummy = new ListNode(0);
  let test = dummy;
  let arr = [];

  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }

  while (arr > 0) {
    let temp = arr.pop();
    test.next = new ListNode(temp);
    test = test.next;
  }

  return dummy.next;
}

function reverseList(head) {
  let prev = null; // Previous node starts as null
  let current = head; // Current node starts as the head of the list

  while (current !== null) {
    let next = current.next; // Store the next node
    current.next = prev; // Reverse the current node's pointer
    prev = current; // Move prev up to current
    current = next; // Move current to the next node in the original list
  }

  return prev; // At the end, prev will be the new head of the reversed list
}
