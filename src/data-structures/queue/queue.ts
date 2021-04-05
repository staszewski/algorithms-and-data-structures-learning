interface QueueInterface {
  enqueue(item: Record<string, any>): void;
  dequeue(): Record<string, any> | false;
}

class Queue implements QueueInterface {
  private _queue: Record<number, any> = {};
  head = 0;
  tail = 0;
  get queue(): Record<number, any> {
    return this._queue;
  }

  enqueue(item: Record<string, any>) {
    this._queue[this.tail++] = item;
  }
  dequeue(): Record<string, any> | false {
    if (this.head === this.tail) {
      return false;
    }
    const deletedElement = this._queue[this.head];
    delete this._queue[this.head];
    this.head++;
    return deletedElement;
  }
}

export default Queue;
