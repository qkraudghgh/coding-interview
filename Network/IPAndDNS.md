# IP주소와 DNS
## IP
- 컴퓨터 네트워크에서 장치들이 서로를 인식하고 통신을 하기 위해서 사용하는 특수한 번호.

### IPv4
- ![IPv4](./images/ipv4.png)
- 크기가 32비트인 주소값으로 대게 `dotted-decimal notation`을 이용해 표기한다.
- dot으로 구분된 각 숫자는 8비트씩(octet) 나타낼 수 있으며 0~255의 범위를 나타낸다.

#### Class
- IP 주소는 `Network ID`와 `Host ID`로 이루어져 있다.
- IPv4는 5개의 클래스로 나누어져 있는데 각각 A, B, C, D, E Class이다.
- A Class는 처음 8bit(1byte)가 Network ID이며, 나머지 24bit(3Byte)가 Host ID이다. `(0.0.0.0 ~ 127.255.255.255)`
- B Class는 처음 16bit(2byte)가 Network ID이며, 나머지 16bit(2Byte)가 Host ID이다. `(128.0.0.0 ~ 191.255.255.255)`
- C Class는 처음 24bit(3byte)가 Network ID이며, 나머지 8bit(1Byte)가 Host ID이다. `(192.0.0.0 ~ 233.255.255.255)`
- D Class는 Multicast(한 번의 송신으로 메시지나 정보를 여러 컴퓨터에 동시에 전송하는 것, 즉 그때 이용되는 IP)이다.
- E Class는 예약된 IP주소들로 미래에 쓰기위해 남겨두었다.

### Private address (비공개 주소)
- 직접 인터넷에 연결되지 않고 NAT(Network Address Translation)을 이용해 인터넷에 접속되는 사설망
- 대표적으로 `192.168.0.0`이 있으며 홈 라우터에 의해 `192.168.0.0 ~ 192.168.0.255/24`까지 할당 된다.

### IPv6
- IPv4의 32비트에서 128비트(16 octet)으로 증가하여 더 많은 IP주소를 할당할 수 있는 주소
- IPv4의 주소가 모자라게되면서 IPv4는 더 많은 주소를 네트워크에 할당하기 위해 `Network Fragmentation`이 지속적으로 증가하게되어 라우터에 많은 부담을 주고있어
  이를 해결하기위해 IPv6가 새로 설계되었다.

## DNS
- Domain Name Service
- Host의 도메인 이름을 네트워크 주소로 바꾸거나 그 반대의 변환을 수행할 수 있도록 하기위해 개발됨 (www.example.com -> 10.124.12.45 혹은 그 반대)
- Socket Library의 `리졸버`를 호출하여 도메인 이름으로부터 네트워크 주소를 받아온다.
- DNS Name Server: DNS 데이터베이스 레코드를 저장하는 물리적 서버
- 리졸버 호출 -> 리졸버가 DNS 서버에 `조회 메시지` 보냄 -> DNS 서버에서 응답 메시지 받음
- 조회 메시지
  - Name : 서버나 메일 배송 목적지와 같은 이름
  - Class : 인터넷 이외의 네트워크를 구분하기위해 설계되었지만 지금은 인터넷 이외엔 소멸되어 항상 `IN`이 적혀있음
  - Type
    - 타입에 따라 클라이언트에 회답하는 정보의 내용이 달라짐
    - **A** Type: 도메인 이름에서 IP 주소를 조사
    - **MX** Type: 메일 주소를 조사
    - **PTR** Type: IP 주소에서 도메인 이름을 조사
    - **CNAME** Type: 이름에 alias를 붙임
    - **NS** Type: 리졸버가 요청한 DNS 서버에 조회메시지에 알맞는 정보가 없다면 다른 DNS 서버의 IP를 NS TYPE과 함께 회답함
    - **SOA** Type: 도메인 자체의 속성 정보를 등록
  - 조회 메시지에 해당하는 Name, Class, Type이 모두 맞는 것을 DNS 서버에서 찾아서 회신함

### 도메인의 계층
- www.example.co.kr
- kr 도메인 -> co 도메인 -> example 도메인 -> www 도메인
- Kr이 가장 상위 도메인이다.
- co는 kr의 서브도메인이며 example은 co의 서브도메인이다.
- 서브도메인은 127단계까지 가능함

### DNS에서 등록한 정보를 찾아내는 방법
`www.example.co.kr`를 브라우저에 입력
0. DNS 캐시와 hosts파일에 도메인 정보가 있는지 확인 (있으면 여기서 끝나고 없으면 1번으로)
1. 가장 가까운 DNS 서버(로컬 DNS 서버)에 `www.example.co.kr` 도메인 정보 요청
2. 로컬 DNS 서버엔 `www.example.co.kr`에 대한 정보가 없기 때문에 루트 DNS 서버에 다시 질의
3. 루트 DNS 서버는 `www.example.co.kr`에 대한 정보가 없지만 `kr 도메인`을 관리하고 있는 서버 정보를 알려줌
4. 로컬 DNS 서버는 `www.example.co.kr`에 대한 정보를 `kr 도메인`을 관리하고 있는 서버에 질의
5. kr 도메인을 관리하고있는 DNS 서버는 `www.example.co.kr`에 대한 정보가 없지만 `co 도메인`을 관리하고 있는 서버 정보를 알려줌
6. recursive하게 도메인을 질의하여 `example 도메인`을 관리하는 DNS 서버까지 도달하면 `www.example.co.kr`에 대한 정보를 알 수 있음
7. 로컬 DNS 서버는 `www.example.co.kr`의 IP 정보를 사용자의 PC에 알려줌

- DNS 캐시는 정확도를 위해 일정 시간이 지나면 파기한다.
- 리졸버에 의해 IP 번호를 받아오면 DNS 캐시에 의한 정보인지 DNS 서버 회답인지도 알 수 있다.
