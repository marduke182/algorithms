import mergesort from '../mergesort';

const emptyArray = [];

test('should return empty array', async () => {
  mergesort(emptyArray);

  expect(emptyArray).toEqual(emptyArray);
});


test('should return empty array', async () => {
  const oneElement = [1];
  mergesort(oneElement);

  expect(oneElement).toEqual(oneElement);
});

test('should sort an array', async () => {
  const unorderedElement = [5,1,2,5,2,3,10,3];
  const expected = [1,2,2,3,3,5,5,10];

  expect(mergesort(unorderedElement)).toEqual(expected);
});