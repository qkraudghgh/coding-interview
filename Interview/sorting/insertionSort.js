const arr = [5, 4, 3, 2, 1];

function insertionSort(arr) {
  const copied = [...arr]; // copy
  for (let i = 1; i < copied.length; i++) { // key는 2번 element부터 시작
    for (let j = i; j > 0 && copied[j] < copied[j-1]; j--) { // 비교는 Key값부터 시작하고 key값부터 왼쪽으로 비교하면서 swap
      [copied[j], copied[j-1]] = [copied[j-1], copied[j]]
    }
  }
  return copied;
}

console.log(insertionSort(arr))