function heapify(array, n, i) {
  let largest = i;
  const left = (largest * 2) + 1;
  const right = (largest * 2) + 2;

  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  if (largest === i) {
    return;
  }

  // Swap
  ([array[i], array[largest]] = [array[largest], array[i]]);

  // Heapify subtree of the new largest
  heapify(array, n, largest);
}

function maxHeap(array, n) {
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }
}

export default function HeapSort(array) {
  const length = array.length;
  maxHeap(array, length);

  for(let i = length - 1; i >= 0; i--) {
    // Swap first element with current index
    ([array[0], array[i]] = [array[i], array[0]]);
    heapify(array, i - 1, 0);
  }
}