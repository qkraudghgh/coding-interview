const arr = [5, 4, 3, 2, 1];

function bubleSort(arr) {
  const copied = arr.slice();
  let swapped;
  do {
    swapped = false;
    for (let i=0; i < copied.length-1; i++) {
      if (copied[i] > copied[i+1]) {
        [copied[i], copied[i+1]] = [copied[i+1], copied[i]]
        swapped = true;
      }
    }
  } while (swapped);
  return copied;
}

console.log(bubleSort(arr))