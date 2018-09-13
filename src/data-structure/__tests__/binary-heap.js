import BinaryHeap, { MAX } from '../binary-heap';

const identity = x => x;

describe('max heap', () => {
  let maxHeap;

  beforeEach(async () => {
    maxHeap = new BinaryHeap(identity, MAX);
  });

  test('should return null, if no element', async () => {
    expect(maxHeap.pop()).toBeNull();
  });
});