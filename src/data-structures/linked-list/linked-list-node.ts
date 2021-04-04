class LinkedListNode {
  get next(): null {
    return this._next;
  }
  get value(): any {
    return this._value;
  }
  private _value: any;
  private _next: null;
  constructor(value: any, next: null = null) {
    this._value = value;
    this._next = next;
  }
}

export default LinkedListNode
