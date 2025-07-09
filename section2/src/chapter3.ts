// object
// let user: object = {
//   id: 1, 
//   name: "yeony"
// };

// 타입이 object인 경우, 점표기법으로 접근 불가
// user.id;

// 객체 리터럴 방식으로, 프로퍼티의 타입까지 모두 정의
// 점표기법으로 접근 가능
let user: {
  id?: number; // ?(선택적 프로퍼티, optional 프로퍼티) : 프로퍼티가 선택적임을 의미(있어도 되고 없어도 되지만, 있는 경우 number 타입)
  name: string;
} = {
  id: 1,
  name: "yeony"
}

// 구조적 타입 시스템 => 프로퍼티 베이스드 타입스크립트
// 명목적 타입 시스템 : 이름을 기준으로 타입을 정의 <-> 구조적 타입 시스템
let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown"
}

user.id;


let config: {
  readonly apiKey: string; // readonly : 읽기 전용 프로퍼티, 값을 변경할 수 없음
} = {
  apiKey: "MY API KEY"
}

//[X] config.apiKey = "hacked";