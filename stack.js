/** Node: node for a stack. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: LIFO structure. */
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** Add a value to the top of the stack. */
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = this.last = newNode; // Initialize both first and last
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
  }

  /** Remove and return the value from the top of the stack. */
  pop() {
    if (this.isEmpty()) throw new Error("Stack is empty.");
    const removedNode = this.first;
    this.first = this.first.next;
    if (!this.first) this.last = null; // Update last if stack becomes empty
    this.size--;
    return removedNode.val;
  }

  /** Return the value at the top of the stack without removing it. */
  peek() {
    if (this.isEmpty()) throw new Error("Stack is empty.");
    return this.first.val;
  }

  /** Check if the stack is empty. */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
