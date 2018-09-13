import BinaryHeap, { MAX, MIN } from '../binary-heap';

const identity = x => x;

describe('max heap', () => {
  let maxHeap;

  beforeEach(async () => {
    maxHeap = new BinaryHeap(identity, MAX);
  });

  test('should return null, if no element', async () => {
    expect(maxHeap.pop()).toBeNull();
  });

  test('should return 2, if only exist 2', async () => {
    maxHeap.push(2);

    expect(maxHeap.pop()).toBe(2);
  });

  test('should return 5, if push 2 and 5', async () => {
    maxHeap.push(2);
    maxHeap.push(5);

    expect(maxHeap.pop()).toBe(5);
  });

  test('should return 5, if push 5 and 2', async () => {
    maxHeap.push(2);
    maxHeap.push(5);

    expect(maxHeap.pop()).toBe(5);
  });

  test('should pop in order', async () => {
    [5,7,1,10,20,30,20].forEach(element => maxHeap.push(element));

    [30,20,20,10,7,5,1].forEach(element => expect(maxHeap.pop()).toBe(element))
  });
});

describe('min heap', () => {
  let minHeap;

  beforeEach(async () => {
    minHeap = new BinaryHeap(identity, MIN);
  });
  test('should pop in order', async () => {
    [5,7,1,10,20,30,20].forEach(element => minHeap.push(element));

    [1,5,7,10,20,20,30].forEach(element => expect(minHeap.pop()).toBe(element))
  });
});