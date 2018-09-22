function partition(array, start, end) {
  const pivote = array[start];
  let leftIndex = start + 1;
  let rightIndex = end;

  while (true) {
    while (leftIndex <= rightIndex && array[leftIndex] <= pivote) {
      leftIndex++;
    }

    while (leftIndex <= rightIndex && array[rightIndex] >= pivote) {
      rightIndex--;
    }

    if (leftIndex > rightIndex) {
      break;
    }

    // Swap
    ([array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]]);
  }

  ([array[start], array[rightIndex]] = [array[rightIndex], array[start]]);
  return rightIndex;
}

function quickSort(array, start, end) {
  if (start < end) {
    const splitPoint = partition(array, start, end);

    quickSort(array, start, splitPoint - 1);
    quickSort(array, splitPoint + 1, end);
  }
}

export default array => quickSort(array, 0, array.length - 1);