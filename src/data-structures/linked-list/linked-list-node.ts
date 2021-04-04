class LinkedListNode {
  value: any;
  next: any;
  constructor(value: any, next?: any) {
    this.value = value;
    this.next = next || null;
  }
}

export default LinkedListNode;
