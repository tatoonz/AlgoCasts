// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0

    let node = this.head
    while (node) {
      counter++
      node = node.next
    }

    return counter
  }

  getFirst() {
    return this.head
  }

  getLast() {
    if (!this.head) {
      return null
    }

    let node = this.head

    while (node.next !== null) {
      node = node.next
    }

    return node
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) {
      return
    }

    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) {
      return
    }

    if (!this.head.next) {
      this.head = null
      return
    }

    let previous = this.head
    let node = this.head.next
    while (node.next) {
      previous = node
      node = node.next
    }
    previous.next = null
  }

  insertLast(data) {
    const last = this.getLast()

    const node = new Node(data)
    if (last) {
      last.next = node
      return
    }

    this.head = node
  }

  getAt(i) {
    let counter = 0
    let node = this.head

    while (node) {
      if (counter === i) {
        return node
      }

      counter++
      node = node.next
    }

    return null
  }

  removeAt(i) {
    if (!this.head) {
      return
    }

    if (i === 0) {
      return this.head = this.head.next
    }

    const previous = this.getAt(i - 1)
    if (!previous || !previous.next) {
      return
    }

    previous.next = previous.next.next
  }

  insertAt(data, i) {
    if (!this.head) {
      return this.head = new Node(data)
    }

    if (i === 0) {
      return this.head = new Node(data, this.head)
    }

    const previous = this.getAt(i - 1) || this.getLast()
    previous.next = new Node(data, previous.next)
  }

  forEach(callback) {
    let node = this.head
    let index = 0
    while (node) {
      callback(node, index)
      node = node.next
      index++
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
