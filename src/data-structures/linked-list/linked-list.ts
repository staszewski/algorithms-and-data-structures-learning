import LinkedListNode from './linked-list-node';

interface LinkedListInterface {
  append(value: number): this;
  prepend(value: number): this;
  remove(value: number): LinkedListNode | null;
  contains(value: number): boolean;
  toArray(): number[];
}

class LinkedList implements LinkedListInterface {
  head: LinkedListNode | null = null;
  tail: LinkedListNode | null = null;

  append(value: number): this {
    const node = new LinkedListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;

      return this;
    }

    // @ts-ignore
    this.tail?.next = node || null;
    this.tail = node;

    return this;
  }

  prepend(value: number): this {
    const node = new LinkedListNode(value, this.head);
    node.next = this.head;
    this.head = node;
    if (this.tail === null) {
      this.tail = node;
    }
    return this;
  }

  remove(value: number): LinkedListNode | null {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode?.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail?.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  contains(value: number): boolean {
    if (this.head === null) {
      return false;
    }
    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode?.value !== value) {
        currentNode = currentNode?.next;
      }
    }
    return true;
  }

  toArray(): number[] {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}

export default LinkedList;
