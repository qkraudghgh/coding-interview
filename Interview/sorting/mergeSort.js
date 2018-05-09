const unsortedArr = [5, 4, 3, 2, 1];

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
     } else {
      sortedArr.push(rightArr.shift());
     }
   }

  while (leftArr.length)
    sortedArr.push(leftArr.shift());
  while (rightArr.length)
    sortedArr.push(rightArr.shift());

  return sortedArr;
}

function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const midpoint = Math.floor(arr.length / 2);
    const leftArr   = arr.slice(0, midpoint);
    const rightArr  = arr.slice(midpoint, arr.length);
    return merge(mergesort(leftArr), mergesort(rightArr));
  }
}

console.log(mergesort(unsortedArr));