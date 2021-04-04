import LinkedListNode from './linked-list-node';

interface LinkedListInterface {
  append(node: LinkedListNode): void;
  prepend(node: LinkedListNode): void;
}

class LinkedList implements LinkedListInterface {
  head: LinkedListNode | null = null;
  tail: LinkedListNode | null = null;

  append(node: LinkedListNode): void {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail = node;
      this.tail.next = node;
    }
  }

  prepend(node: LinkedListNode): void {
    node.next = this.head
    this.head = node
    if (this.tail === null) {
      this.tail = node
    }
  }
}

export default LinkedList;
