// 타입 별칭
// 같은 스코프 내에서, 중복이름으로 선언 금지

import { KeyObject } from 'crypto';

// 중복코드 제거 가능
type User = { // 객체타입을 정의할거라 {} 사용
  id: number;
  name: string;
  nicname: string;
  birth: string;
  bio: string;
  location: string;
  extra?: string;
}

function func(){
  type User = {} // 함수 내부에서 정의한 타입은, 함수 내부에서만 사용 가능
}

let user: User = {
  id: 1,
  name: "yeony",
  nicname: "yeony",
  birth: "2000-01-01",
  bio: "안녕하세요, 저는 yeony입니다.",
  location: "서울"
}

let user2: User = {
  id: 2,
  name: "jenny",
  nicname: "jenny",
  birth: "1995-05-05",
  bio: "안녕하세요, 저는 jenny입니다.",
  location: "부산"
}


// 인덱스 시그니처
type CountryCodes = {
  // Korea: string;
  // UnitedState: string;
  // UnitiedKingdom: string;
  [key : string]: string; // key가 string 타입이고, value가 string 타입인 프로퍼티를 가질 수 있음
}
let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitiedKingdom: 'uk'
}

type CountryNumberCodes = {
  [key : string]: number; // key가 string 타입이고, value가 number 타입인 프로퍼티를 가질 수 있음
  // Korea: string; // [X] 인덱스 시그니처에서는 value 타입이 일치 또는 호환이 가능해야함 
  Korea: number; // Korea 프로퍼티만 필수로 갖는다
}
let countryNumberCodes: CountryNumberCodes = {
  // Korea: 410,
  // UnitedState: 840,
  // UnitiedKingdom: 826
  // 프로퍼티가 없어도 type이 정의된 타입에 맞게 작성되면 오류가 발생하지 않음 (빈객체일때 조심!)
  Korea: 410
}