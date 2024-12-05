/** Node: node for a queue. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: FIFO structure. */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** Add a value to the end of the queue. */
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  /** Remove a value from the start of the queue. */
  dequeue() {
    if (this.isEmpty()) throw new Error("Queue is empty.");
    const removedNode = this.first;
    this.first = this.first.next;
    if (!this.first) this.last = null;
    this.size--;
    return removedNode.val;
  }

  /** Return the value at the start of the queue without removing it. */
  peek() {
    if (this.isEmpty()) throw new Error("Queue is empty.");
    return this.first.val;
  }

  /** Check if the queue is empty. */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
