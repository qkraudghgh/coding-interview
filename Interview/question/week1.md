# 목차

1. Array vs LinkedList
2. GET, POST 방식의 차이점
3. 프로세스와 스레드의 차이
4. 데이터베이스를 사용하는 이유
5. JavaScript Event Loop

## Array vs LinkedList

Static Array기준 LinkedList와 다른점은 Capacity다. Static Array는 Capacity가 정해져있는 방면 LinkedList는 Capacity에 상관없이 item을 추가할 수 있다.
또한 Array는 같은 자료형을 가진 연속된 메모리 공간으로 이루어져있고, LinkedList는 데이터와 다음 노드를 가리키는 포인터가 모인 노드로 이루어져있고 연속된 메모리 공간에 없어도 된다.
특정 Element에 접근하려면 Array는 Constant Time에 접근 가능하고 LinkedList는 O(n)의 시간이 걸린다. Array는 첫 Element의 주소값이 Array의 이름이되고 같은 자료형의 데이터만 가지고 있으니
주소값 + index * 자료형 크기로 바로 접근 가능 하지만 LinkedList는 찾는 Element에 도달할때까지 포인터를 타고 계속 search 해야한다.

## GET, POST 방식의 차이점

용도가 다르다. HTTP 자체가 클라이언트와 서버가 주고받는 메시지의 내용이나 순서를 약속한 것이고 이때 GET은 정보를 조회하기 위한 메소드라고 약속했고
POST는 서버로 데이터를 전송하기 위해 설계된 메소드라고 약속했다. 둘다 데이터를 서버에 전달할 수 있다는 것이 공통점이지만 방식은 전혀 다른데
GET은 URL의 파라미터로 이름과 데이터가 쌍으로 명시되어 전달되고, POST는 HTTP Request Message의 Body 부분에 데이터가 담겨있다.
또한 URL의 길이는 제한적이기 때문에 GET으로는 많은 양의 데이터를 전송할 수도 없다.

[https://tools.ietf.org/html/rfc2616](https://tools.ietf.org/html/rfc2616)

## 프로세스와 스레드의 차이

프로세스는 운영체제에의해 자원을 할당받는 실행의 단위이고, 스레드는 프로세스가 할당받은 자원을 공유하는 실행의 단위이다.
스레드는 User-level Thread와 Kernel-level Thread 두 가지가 있는데,
User-level Thread는 Kernel 입장에서 보면 그냥 단순히 Single Thread이다. 그래서 CPU에서 다중처리가 가능해도 이에따른 이득을 보지 못한다.
그리고 특정 Thread의 대기가 프로세스 내의 모든 스레드의 대기를 초래할 수 있다. (CPU 기준엔 Single Process이므로 대기시에 process 전체가 대기한다.)
그럼에도 불구하고 Thread는 한 프로세스의 자원 및 메모리를 공유하므로 스레드간의 통신 비용이 작고(동기화에 신경 써줘야함), 런타임 라이브러리가 context를 유지하기 때문에 switching 비용이 발생하지 않는다. 그래서 멀티 프로세스에 비해 빠르다. 또 한가지 Kernel-level Thread는 모든 스레드를 kernel이 관리하는데 스레드가 독립적으로 kernel에 의해 스케쥴링 되므로 독립된 thread에 blocking이 생기더라도 process 자체가 blocking되는 일이 발생하지 않는다. 요즘은 CPU 코어 수가 늘어나면서 Kernel-level Thread 강세라고 한다.

[https://kldp.org/node/295](https://kldp.org/node/295)

## 데이터베이스를 사용하는 이유

파일처리 시스템을 이용할 수도 있겠지만, 여러가지 문제점이 있다.
데이터의 일부분을 수정하려고하면 그와 연관된 모든 파일을 모두 수정해야하는 번거로움이 있고, 비슷한 내용이 여러파일에 산재해 있는 경우가 생길 수 있다.
또한 파일 시스템은 OS의 영역이고 파일 시스템이 OS마다 다를 수 있기 때문에 OS에 종속적인 파일 시스템을 이용하는 것은 프로그램의 확장성을 해칠 수 있다.
원하는 데이터를 찾으려면 관련된 파일도 모두 찾아야하고 그 안에서 데이터도 찾아야하기 때문에 검색이 힘들고 이를 기반으로하는 단순 작업또한 어렵게된다.
이러한 단점을 극복하기위해 이러한 데이터의 저장을 전문으로 관라하는 프로그램인 DBMS를 두어 효율적으로 데이터를 관리한다.
또한 DBMS를 통해 여러 유저가 DB의 세션을 열어 사용하더라도 문제가 없게 만들어준다.

[http://yang1650.tistory.com/28](http://yang1650.tistory.com/28)

## JavaScript Event Loop

ECMAScript 스펙에는 사실 Event Loop가 없고 단순히 단일 Call Stack을 사용하여 요청이 들어올 때마다 해당 요청을 순차적으로 호출 스택에 담아 처리한다.
Event Loop는 Javascript 자체 스팩이아닌 Javascript 구동 환경에 포함되어 있다. Javascript는 단일 Call Stack이기 때문에 브라우저나 Node.js의 API들과 잘 섞여 쓸 수 있도록
도와주는 것이 Event Loop의 역할이다. 모든 비동기 API들은 작업이 완료되면 Call back 함수를 Task Queue에 추가한다. Event Loop는 현재 실행중인 Task가 없을 때(Call stack이 비어있을 때)
Task Queue에서 Pop해서 실행한다. 이렇게 비동기 처리가 되는 것이다. Promise의 then 메소드는 Call back 함수를 Task Queue가 아닌 Micro Task Queue에 추가한다.
Micro Task Queue는 Task Queue보다 우선순위가 높으며 Event Loop는 Micro Task Queue의 Task부터 꺼내서 실행하게된다. 이는 HTML 스펙에 명시되어있다.
근데 ES6부터는 또 Job Queue라고 Promise Callback을 관리하는 Queue가 새로 생겼는데 HTML의 Micro Task Queue와 동시에 사용될 수 있다고 한다.
근데 두개가 어떻게 우선순위를 가지고 돌아가는건지는 찾아봐도 잘 안나옴

[http://meetup.toast.com/posts/89](http://meetup.toast.com/posts/89)
[https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint)
[http://www.ecma-international.org/ecma-262/6.0/#sec-jobs-and-job-queues](http://www.ecma-international.org/ecma-262/6.0/#sec-jobs-and-job-queues)
