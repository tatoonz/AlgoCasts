// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stackA = new Stack()
    this.stackB = new Stack()
  }

  add(record) {
    this.stackA.push(record)
  }

  transferStack(a, b) {
    while(a.peek()) {
      b.push(a.pop())
    }
  }

  remove() {
    this.transferStack(this.stackA, this.stackB)
    const record = this.stackB.pop()
    this.transferStack(this.stackB, this.stackA)

    return record
  }

  peek() {
    this.transferStack(this.stackA, this.stackB)
    const record = this.stackB.peek()
    this.transferStack(this.stackB, this.stackA)

    return record
  }
}

module.exports = Queue;
