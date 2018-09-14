function merge(left, right) {
  const result = [];
  const leftLength = left.length;
  const rightLength = right.length;
  let leftIndex = 0;
  let rightIndex = 0;


  while(leftIndex < leftLength || rightIndex < rightLength) {
    if (leftIndex >= leftLength) {
      result.push(right[rightIndex]);
      rightIndex++;
    } else if (rightIndex >= rightLength) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result;
}

export default function mergeSort(array) {
  const length = array.length;

  if (length < 2) {
    return array;
  }

  const mid = Math.floor(length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid, length);

  return merge(
    mergeSort(left),
    mergeSort(right),
  );
}