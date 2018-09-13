export const MAX = (left, right) => right - left;
export const MIN = (left, right) => left - right;

export default class BinaryHeap {
  constructor(scoreFunction, compareFunction) {
    this._heap = [];
    this.scoreFunction = scoreFunction;
    this.compareFunction = compareFunction;
  }

  push(element) {
    this._heap.push(element);
    this._bubbleUp(this._heap.length - 1);
  }

  pop() {
    // If no elements return null
    if (this._heap.length === 0) {
      return null;
    }

    const result = this._heap[0];
    const end = this._heap.pop();

    if(this._heap.length > 0) {
      this._heap[0] = end;
      this._sinkDown(0);
    }

    return result;
  }

  _bubbleUp(n) {
    const element = this._heap[n];
    const score = this.scoreFunction(element);

    while(n > 0) {
      const parentN = Math.floor((n + 1) / 2) - 1;
      const parent = this._heap[parentN];

      if (this.compareFunction(score, this.scoreFunction(parent)) >= 0) {
        break;
      }

      this._heap[parentN] = element;
      this._heap[n] = parent;
      n = parentN;
    }
  }

  _sinkDown(n) {
    const length = this._heap.length;
    const element = this._heap[n];
    const score = this.scoreFunction(element);

    while (true) {
      const rightN= (n + 1) * 2;
      const leftN = rightN - 1;

      let swap = null;
      let localScore = score;
      if (leftN < length) { // first child exist
        const left = this._heap[leftN];
        const leftScore = this.scoreFunction(left);
        if(this.compareFunction(score, leftScore) > 0) {
          swap = leftN;
          localScore = leftScore;
        }
      }

      if(rightN < length) {
        const right = this._heap[rightN];
        const rightScore = this.scoreFunction(right);
        if(this.compareFunction(localScore, rightScore) > 0) {
          swap = rightN;
        }
      }

      if (swap === null) {
        break;
      }

      // swap
      ([this._heap[n], this._heap[swap]] = [this._heap[swap], this._heap[n]]);
      n = swap;
    }
  }
}