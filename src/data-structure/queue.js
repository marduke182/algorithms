export default class Queue {
  constructor(size) {
    if (!size) {
      throw new Error('Should choose a size for the queue.');
    }
    this.maxSize = size;
    this.front = 0;
    this.rear = 0;
    this.elements = [];
  }

  _resizing() {
    if (this.front > this.maxSize / 2) {
      this.elements.splice(0, this.front);
      this.rear = this.rear - this.front;
      this.front = 0;
    }
  }

  enqueue(value) {
    if (this.isFull()) {
      throw new Error('Queue is full.');
    }

    this.elements[this.rear++] = value;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.elements[this.front++];

    this._resizing(); // Try to resize queue to free space;
    return value;
  }

  isFull() {
    const items = this.rear - this.front;
    return items === this.maxSize;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.elements[this.front];
  }

  isEmpty() {
    const items = this.rear - this.front;
    return items === 0;
  }

  print() {
    console.log(this.elements.slice(this.front, this.rear).join(' '));
  }
}