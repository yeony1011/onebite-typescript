// 객체타입 (2가지) : object 타입, 객체 리터럴 타입

// 1. object 타입
// let user: object = {
//   id: 1, 
//   name: "yeony"
// };

// 타입이 object인 경우, '점표기법'으로 접근 불가
// [X] user.id; -> 오류 : object 타입에 id 프로퍼티가 없음
// object 타입은 단순 값이 객체임을 표현하는 것 외에는 아무런 정보도 제공하지 않는 타입

// 2. 객체 리터럴
// 객체 리터럴 방식으로, 프로퍼티의 타입까지 모두 정의
// 점표기법, 괄호표기법 모두 접근 가능
let user: {
  id?: number; // ?(선택적 프로퍼티, optional 프로퍼티) : 프로퍼티가 선택적임을 의미(있어도 되고 없어도 되지만, 있는 경우 **number** 타입)
  name: string;
} = {
  id: 1,
  name: "yeony"
}

// ** 타입스크립트의 특징 ( 구조적 타입 시스템 )
// 구조적 타입 시스템 : 정적 타입 시스템을 따르는 언어인 C나 Java와는 달리 객체의 타입을 정의할 때 프로퍼티를 기준으로 객체의 구조를 정의하 듯이 타입을 정의 ( 프로퍼티 베이스드 타입스크립트 )
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
  readonly apiKey: string; // readonly : 읽기 전용 프로퍼티, 값을 변경할 수 없음, 의도치 않은 값 변경 방지
} = {
  apiKey: "MY API KEY"
}

//[X] config.apiKey = "hacked";