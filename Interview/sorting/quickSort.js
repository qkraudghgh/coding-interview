/*
- quick sort -
unstable하다.
O(nlogn) 단, Pivot이 계속 (1, n-1) 개수로 나뉠 경우 O(n^2)까지 속도가 떨어진다.
이미 정렬되어 있는 배열이 그 예가 될 수 있다.
그래서 pivot을 매번 random하게 정하는 randomize quicksort는 좀더 O(nlogn)의 근사치에 가까워진다.
구현이 쉽고 빨라서 가장 많이 이용하는 정렬 알고리즘이라고 한다.
*/

function quick(arr, left, right) {
  function positioning(arr, left, right) {
    let i = left;
    let j = right;
    const pivot = arr[left];

    while (i < j) {
      while (arr[j] > pivot) {
        j--;
      }
      while (i < j && arr[i] <= pivot) {
        i++;
      }
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[left], arr[i]] = [arr[i], arr[left]];

    return j;
  }

  if (left < right) {
    const position = positioning(arr, left, right);
    quick(arr, left, position - 1);
    quick(arr, position + 1, right);
  }
  return arr;
}

const unsortedArr = [5,4,3,2,1];
console.log(quick(unsortedArr, 0, unsortedArr.length - 1))