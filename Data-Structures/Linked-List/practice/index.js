//Making a Linked List

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length;
    return this;
  }
}

const list = new SinglyLL();
list.insert("A");
console.log(list);
