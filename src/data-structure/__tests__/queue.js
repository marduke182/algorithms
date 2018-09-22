import Queue from '../queue';

let consoleSpy;
let queue;

beforeEach(async () => {
  consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  queue = new Queue(10);
});

test('should enqueue', async () => {
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);

  queue.print();
  expect(consoleSpy).toBeCalledWith('1 2 3 4');
});


test('should dequeue', async () => {
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  const value = queue.dequeue();

  queue.print();

  expect(consoleSpy).toBeCalledWith('2 3 4');
  expect(value).toEqual(1);
});

test('should peek the value', async () => {
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  const value = queue.peek();

  queue.print();

  expect(consoleSpy).toBeCalledWith('1 2 3 4');
  expect(value).toEqual(1)
});

test('should throw if queue is full', async () => {
  queue = new Queue(1);
  queue.enqueue(1);

  expect(() => queue.enqueue(2)).toThrowErrorMatchingSnapshot();
});