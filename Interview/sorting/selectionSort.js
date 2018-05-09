const arr = [5, 4, 3, 2, 1];

function selectionSort(arr) {
  const copied = [...arr];
  for (let i = 0; i < copied.length; i++) {
    let key = i;
    for (let j = i+1; j < copied.length; j++) {
      if (copied[j] < copied[key]) key = j;
    }
    [copied[i], copied[key]] = [copied[key], copied[i]];
  }
  return copied;
}

console.log(selectionSort(arr))