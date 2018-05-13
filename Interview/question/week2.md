# 목차

1. RESTFul API란?
2. Stack and Queue
3. TCP 3-way-handshake
4. 스케줄러의 종류
5. CPU 스케줄링 기법
6. DB Index
7. Javascript Hoisting
8. Javascript, What is 'This'

## RESTFul API란

REST는 Representational State Transfer의 약자입니다. REST API는 HTTP 설계의 우수성을 좀 더 잘 활용할 수 있도록 설계한 아키텍처이며 RESTFul API는 여러 특징을 가지고 있는데 작업을 위한 상태정보를 따로 저장하고 관리하지 않기 때문에(Stateless) API 서버는 요청만을 단순히 처리할 수 있게 됩니다. 또한
REST 아키텍처는 HTTP의 표준을 잘 지키고 있기 때문에 HTTP가 가진 캐싱 기능을 잘 활용할 수 있고 API Message만 보고도 어떤 API인지 쉽게 이해 가능한 점이 RESTFul API의 특징입니다.
이러한 RESTFul API를 설계할때는 중요한 규칙이 있는데, 첫번째는 URI는 정보의 자원을 표현해야한다는 것이고 두번째는 자원에대한 행위는 HTTP Method로 표현해야 한다는 점입니다.

- [http://meetup.toast.com/posts/92](http://meetup.toast.com/posts/92)
- [http://bcho.tistory.com/953](http://bcho.tistory.com/953)
- [https://developer.mozilla.org/ko/docs/Web/HTTP/Caching](https://developer.mozilla.org/ko/docs/Web/HTTP/Caching)

## Stack and Queue

Stack은 LIFO 방식으로 삽입되고 제거되는 자료구조이며 Queue는 FIFO 방식으로 삽입되고 제거되는 자료구조이다.

## TCP 3-way-handshake

TCP의 접속 동작을 의미한다. ACK 번호와 시퀀스 번호를 주고 받으며 서로 데이터를 주고 받을 수 있는 상태라는 것을 확인하는 단계이다.
Client에서 Server로 시퀀스 번호의 초기값과 컨트롤 비트인 SYN(Synchronize)를 보낸다. Server는 Client로 시퀀스 번호의 초기값과 ACK(Acknowledge), 컨트롤비트 SYN, ACK를 보낸다.
Client는 Server에 ACK를 보낸다. 컨트롤 비트는 통신 제어 상태를 의미하며 시퀀스 번호는 데이터의 고유한 번호로서 통신 개시부터 따져서 몇 번째 바이트에 해당하는지를 나타낸다. ACK 번호는 시퀀스 번호에 1을 더한 숫자이며 해당 데이터를 잘 받았다고 고지하는 역할을 한다.

- [https://www.youtube.com/watch?v=LyDqA-dAPW4](https://www.youtube.com/watch?v=LyDqA-dAPW4)

## 스케줄러의 종류

- 장기 스케줄러
  - 디스크에 있는 프로그램을 일괄처리큐에 대기시킨 후 프로세스가 되도록 하는 스케줄러
  - 다중 프로그래밍의 정도를 조절
- 중기 스케줄러
  - 특정 프로세스에게 할당되어 있는 메모리를 빼앗거나 복귀시키는 스케줄러 (swapping)
- 단기 스케줄러
  - 준비 상태의 프로세스중에 어느 프로세스에게 CPU를 할당할지 결정하는 스케줄러

## CPU 스케줄링 기법

- FCFS
  - First Come First Service의 약자로 비선점 방식의 스케줄링 방식이다. Ready Queue에 들어온 순서대로 CPU를 할당하고 처리한다.
- SJF(or SPN)
  - Shortest Job First의 약자로 이름대로 CPU 요구량이 적은 것 부터 처리하는 비선점 방식의 스케줄링 방식이다. CPU 요구량이 높은 것은 무한대기 할 수도 있다.
- SRT
  - Shortest Remaining Time의 약자로 SJF를 선점 방식으로 처리하는 방식이다. CPU 요구량이 적은 것부터 스케줄링을 해나가되 CPU 요구량이 더 적은 것이 들어 올 경우 CPU를 빼앗겨 Context Swiching이 된다.
- Multi-Level Queue
  - 정적 우선순위를 사용하는 선점 방식 스케줄링으로 우선순위 개수만큼 Queue가 있으며 가장 우선순위가 높은 Queue부터 작업을 처리하다가 더 높은 우선순위의 작업이 들어오면 CPU를 빼앗긴다.
- Multi Level Feedback Queue
  - 동적 우선순위를 사용하는 선점 방식 스케줄링으로 우선순위 개수만큼 Queue가 있으며 최상위 단계의 Ready Queue부터 FCFS의 방식으로 실행 후 해당 큐의 할당량이 끝나면 하위 우선순위 준비큐에 들어간다. 우선 순위가 낮을수록 큐의 CPU 시간 할당량이 많아지게되며 마지막엔 결국 RR 스케줄링이 된다. 단 Queue의 할당량을 다 사용할 때까지 다른 Queue에게 CPU를 빼앗기진 않음. 입출력에의해 할당량을 채우지 못하고 CPU를 빼앗기게되면 해당 프로세스의 우선순위를 한단계 높인다.
- Round Robin
  - FCFS 스케줄링을 기반으로하여 CPU를 할당하되 각 프로세스는 한번에 쓸 수 있는 CPU 시간이 있어 그 시간이 지나면 시간종료 인터럽트에 의해 CPU를 빼앗가는 선점 방식의 스케줄링이다. 프로세스 하나가 CPU를 독점하는 단점을 막을 수 있지만 Context Switch의 오버헤드를 감수해야한다.

## DB Index

> TODO...
- Index란 무엇인가
- Index의 자료구조
- Primary index vs Secondary index
- Composite index
- Index의 성능과 고려해야할 사항

## Javascript Hoisting

변수의 정의와 할당이 분리되는 것을 뜻하며 해당 스코프의 최상단에 선언이 끌어올려지는 것을 의미한다.
ES6에 와서 Reference Error때문에 let과 Const는 Hoisting이 안되는 것 처럼 보이지만
실제론 Temporal Dead Zone에 빠져있는 시기에 호출되었기 때문에 Reference Error가 뜨는 것이다.
변수 생성은 선언, 초기화, 할당 총 3가지의 단계로 이루어져있다. var는 선언과 초기화를 동시에 진행하기 때문에
`var x = 1;`라면 선언과 초기화를 동시에 해서 `x = undefined`가 되었다가 할당을 통해 `x = 1`이 된다.
하지만 let / const는 선언과 초기화를 분리하여 진행하기 때문에 undefined로 초기화되기 전에 변수에 접근하면
Reference Error가 뜨는 것이다.

```javascript
let x = 1;
{
  console.log(x);
  let x = 2; // Reference Error
}

///////

let x = 1;
{
  console.log(x); // 1
}
```

- [https://poiemaweb.com/es6-block-scope](https://poiemaweb.com/es6-block-scope)

## Javascript, What is 'This'

Javascript의 this는 함수를 호출하는 방법에 의해 결정된다.

- 전역 실행 컨텍스트에서 `this`는 `전역 객체`를 참조한다.
- 함수 컨텍스트에서 `this`
  - 단순 함수 호출
    - non-strict: `전역 객체`
    - strict: 함수 실행시 할당된 값을 반환, 만약 정의 되지 않았다면 `undefined`
- 객체의 메소드로서 `this`
  - 단순히 메소드에서 호출시 `호출한 객체`가 this가 된다.
  - 객체의 prototype 체인에서의 this도 `호출한 객체`가 this가 된다.
  - getter와 setter에서도 `호출한 객체`가 this가 된다.
- 생성자에서 `this`
  - new에의해 생성된 객체가 this가 된다.
- DOM 이벤트 핸들러로서
  - 함수가 이벤트 핸들러로 사용될 때는 이벤트가 발생한 Element가 this
- in-line 이벤트 핸들러에서는 리스너가 위치한 `DOM 엘리먼트`가 할당됨

- call, apply, bind
  - 세 메소드 모두 this를 특정한 객체와 연결해준다.
  - call과 apply는 this로 사용할 객체를 전달해줌과 동시에 함수를 실행한다.
  - bind는 넘겨준 객체를 this로 사용하는 새로운 함수를 생성한다.

> bind 예제
```javascript
function f1() {
  console.log(this.x)
}

const f2 = f1.bind({x: 1})

f2() // 1
```

- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)