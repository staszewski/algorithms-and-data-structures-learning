import LinkedListNode from './linked-list-node';

interface LinkedListInterface {
  insert(node: LinkedListNode): void;
}

class LinkedList implements LinkedListInterface {
  head: LinkedListNode | null = null;
  tail: LinkedListNode | null = null;
  insert(node: LinkedListNode): void {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail = node
      this.tail.next = node
    }
  }
}

export default LinkedList;
