class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Push a value to a SinglyLinkedList
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  // Remove the tail of a SinglyLinkedList
  pop() {
    if (!this.head) return undefined;
    if (this.head === this.tail) {
      let removedNode = this.head;
      this.head = null;
      this.tail = null;
      return removedNode;
    }

    let current = this.head;
    while (current.next) {
      if (current.next === this.tail) {
        let removedNode = current.next;
        this.tail = current;
        this.tail.next = null;
        this.length--;
        return removedNode;
      } else {
        // let nextNode = current.next;
        current = current.next;
      }
    }
  }

  // Remove the head of a SinglyLinkedList
  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      // The head is already null because of currentHead.next
      this.tail = null;
    }
    return currentHead;
  }

  // Add a new node to the beginning of a SinglyLinkedList
  unshift(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  // Retrieving a node by it's position
  getNode(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // Set the value of a node based on its position in the Linked List
  setNode(val, index) {
    let node = this.getNode(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  // Insert a node at a specific position in the Linked List
  insert(val, index) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      this.push(val);
    } else if (index === 0) {
      this.unshift(val);
    } else {
      let node = new Node(val);
      let prevNode = this.getNode(index - 1);
      node.next = prevNode.next;
      prevNode.next = node;
      this.length++;
    }
    return true;
  }

  // Remove a node from a specific position in a LinkedList
  removeNode(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === this.length - 1) {
      return this.pop();
    } else if (index === 0) {
      return this.shift();
    } else {
      let prevNode = this.getNode(index - 1);
      let removedNode = prevNode.next;
      prevNode.next = removedNode.next;
      this.length--;
      return removedNode;
    }
  }
}
