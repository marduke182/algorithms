import heapsort from '../heapsort';

const emptyArray = [];

test('should return empty array', async () => {
  heapsort(emptyArray);

  expect(emptyArray).toEqual(emptyArray);
});


test('should return empty array', async () => {
  const oneElement = [1];
  heapsort(oneElement);

  expect(oneElement).toEqual(oneElement);
});

test('should return empty array', async () => {
  const unorderedElement = [5,1,2,5,2,3,10];
  const expected = [1,2,2,3,5,5,10];
  heapsort(unorderedElement);

  expect(unorderedElement).toEqual(expected);
});