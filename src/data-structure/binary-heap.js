export const MAX = (left, right) => Math.max(left, right);
export const MIN = (left, right) => Math.min(left, right);

export default class BinaryHeap {
  constructor(scoreFunction, compareFunction) {
    this._heap = [];
    this.scoreFunction = scoreFunction;
    this.compareFunction = compareFunction;
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

  _sinkDown(n) {

  }
}