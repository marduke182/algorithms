import quickSort from '../quicksort';

const emptyArray = [];

test('should return empty array', async () => {
  quickSort(emptyArray);

  expect(emptyArray).toEqual([]);
});


test('should return one element', async () => {
  const oneElement = [1];
  const expected = [...oneElement];
  quickSort(oneElement);

  expect(oneElement).toEqual(expected);
});

test('should sort the array', async () => {
  const unorderedElement = [5,1,2,5,2,3,10];
  const expected = [1,2,2,3,5,5,10];
  quickSort(unorderedElement);

  expect(unorderedElement).toEqual(expected);
});