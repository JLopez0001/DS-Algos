/*

234. Palindrome Linked List
Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.

*/

function answer(head) {
  let arr = [];
  let current = head;
  if (!current) return false;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }

  let start = 0;
  let last = arr.length - 1;

  while (start <= last) {
    if (arr[start] !== arr[last]) return false;
    if (arr[start] === arr[last]) {
      start++;
      last--;
    }
  }

  return true;
}
