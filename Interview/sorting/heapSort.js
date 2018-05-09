const arr = [5, 4, 3, 2, 1];

function heapify(unsorted, index, heapSize) {
  let largest = index;
  const leftIndex = 2 * index + 1;
  const rightIndex = 2 * index + 2;
  if (leftIndex < heapSize && unsorted[leftIndex] > unsorted[largest]) largest = leftIndex;
  if (rightIndex < heapSize && unsorted[rightIndex] > unsorted[largest]) largest = rightIndex;
  if (largest != index) {
    [unsorted[largest], unsorted[index]] = [unsorted[index], unsorted[largest]];
    heapify(unsorted, largest, heapSize)
  }
}

function heapSort(unsorted) {
  const length = unsorted.length;
  for (let i = Math.floor(length)-1; i > 0; i--) {
    heapify(unsorted, i, length);
  }
  for (let i = length-1; i > 0; i--) {
    [unsorted[0], unsorted[i]] = [unsorted[i], unsorted[0]];
    heapify(unsorted, 0, i);
  }
  return unsorted;
}

console.log(heapSort(arr))