class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  ///Similar to push
  unshift(val) {
    let newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }

  ///Similar to pop
  shift() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    temp.next = null;
    this.size--;
    return temp.val;
  }
}

// const bananaNode = new Node("Banana");
// const appleNode = new Node("Apple");
// bananaNode.next = appleNode;

// console.log(bananaNode);
