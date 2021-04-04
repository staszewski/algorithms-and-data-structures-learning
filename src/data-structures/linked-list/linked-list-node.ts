class LinkedListNode {
  value: any;
  next: any;
  constructor(value: any, next?: any) {
    this.value = value;
    this.next = next || null;
  }
  toString(callback?: (arg0: any) => any) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

export default LinkedListNode;
