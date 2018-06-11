# 목차

1. TDD란 무엇이며 어떠한 장점이 있는가?
2. Tree
3. Binary Tree
4. Full Binary Tree
5. Complete Binary Tree
6. BST(Binary Search Tree)
7. TCP와 UDP의 차이점
8. 동기와 비동기의 차이
9. Closure(javascript)

## TDD란 무엇이며 어떠한 장점이 있는가

Test Driven Development로 테스트 코드를 먼저 짜고 Red - Green - Refactor의 Cycle로 진행되며 일단 실패하는 테스트 코드(명세에 따라서)를 작성 한 후 그 것을 통과하는 코드를 짜고
리팩토링을 진행하는 cycle로 개발을 해가는 개발 방법이다. TDD로 개발하면 Test Coverage가 높아지고 디버깅이 쉬워지며 코드의 신뢰성이 높아진다.

## Tree

Tree T는 `parent-child relationship`을 갖도록 Element를 저장하는 node의 집합이다.
parent-child relationship은 다음과 같은 속성을 만족한다.

1. Tree T가 비어있지 않으면 parent가 없는 특별한 node인 `root node`를 가진다.
2. Tree T의 각각의 node `v`에는 parent node인 `w`가 존재한다. `w`를 parent로 가지는 모든 node는 `w`의 child node이다.

또한 Tree가 될 수 없는 경우가 몇가지 있는데

1. node의 edge가 자기 자신을 향하는 경우
2. path에서 cycle이 생기는 경우
3. node가 2개 이상의 parent를 가지는 경우
4. 서로 연결되지 않은 subtree가 존재하는 경우

- [Tree에 관하여](https://github.com/qkraudghgh/coding-interview/blob/master/DataStructure/Tree/Tree.md)

## Binary Tree

Child node의 개수가 최대 2개인 Ordered Tree를 Binary Tree라고 한다.
Ordered Tree인 이유는 Ordered Tree의 의미 자체가 순서가 정해진 Tree라는 뜻이고 Binary Tree는 left Child가 right Child 보다 순서가 앞선다는 특징이 있다.

- [ordered Tree](http://cs.lmu.edu/~ray/notes/orderedtrees/)

## Full Binary Tree

leaf node를 제외하고 모든 node가 child node를 2개씩 가지는 Tree

- [Full and Complete Binary Tree](http://web.cecs.pdx.edu/~sheard/course/Cs163/Doc/FullvsComplete.html)

## Complete Binary Tree

Tree의 마지막 Level을 제외하고는 모든 level이 완벽하게 채워져 있어야하고 가능한 왼쪽 노드부터 채워져 있어야 한다는 속성을 가진 Tree

## BST(Binary Search Tree)

Binary search Tree는 다음과 같은 속성을 만족하는 Binary Tree이다.

1. parent node `v` 기준 left Child의 모든 node는 v보다 작거나 같아야한다.
2. parent node `v` 기준 right Child의 모든 node는 v보다 크거나 같아야한다.

Inorder traversal시 Sorting된 결과물이 나온다.
특정 element를 search시 expected O(log n), unbalance Tree(1, 2, 3, 4, 5 처럼 right child로 치우쳤을 경우(Linked list와 닮은))일 때 Big O(n)

- [Binary Search Tree](http://cs.lmu.edu/~ray/notes/binarysearchtrees/)

## TCP와 UDP의 차이점

TCP는 ACK와 Timeout, 재전송을 매개로 불안정한 네트워크에 안정성을 더한다. 하지만 UDP는 저런 안전 장치들이 존재하지 않고 데이터를 전송하기만한다.
즉 별거 안해서 TCP보다 UDP가 빠르지만 데이터 손실이 크다.

- [인벤에 이런.. 좋은 글이..](http://www.inven.co.kr/webzine/news/?news=165870)

## 동기와 비동기의 차이

- Synchronous Programming
  - 결과값을 바로 돌려받아야 다음 작업을 실행 할 수 있는 프로그래밍 방식
- Asynchoronous Programming
  - 프로그램의 주 실행흐름에 멈춤이 없이 결과값이 바로 주어지지 않더라도 즉시 다른 작업을 수행 할 수 있도록 만드는 프로그래밍 방식
  - Promise 객체를 즉시 돌려받거나, callback function 같은 방식으로 결과 값에대한 처리를 한다.
  - Asynchronous가 Non-blocking IO는 아니며 비동기 프로그래밍을 충족시키기위한 재료로 Non-blocking IO를 사용할 수도 있다.
- Blocking IO
  - I/O처리가 끝날때까지 CPU는 유휴상태가 되며 작업이 끝나면 결과값을 반환
- Non-blocking IO
  - I/O처리가 끝나지 않더라도 특정 상태값이 바로 반환되며 CPU는 유휴상태에 들어가지 않고 다른 작업을 처리할 수 있게된다. IO에대한 결과값은 나중에 시그널을 주어 처리

- [Synchronous & Asynchoronous](https://tech.peoplefund.co.kr/2017/08/02/non-blocking-asynchronous-concurrency.html)

## Closure(javascript)

클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다.
클로저를 이용하여 Private method 등을 흉내낼 수 있다.

- [Closure](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)
- [Closure2](http://meetup.toast.com/posts/86)