// enum 타입 (자바스크립트에는 없고, 타입스크립트에만 있는 타입)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0, // 0 <- 관리자
  USER = 1, // 1 <- 일반 유저
  GUEST = 2, // 2 <- 게스트
}
// 숫자 할당하지 않아도, 자동으로 0번 부터 +1씩 자동으로 할당됨

// 숫자형 enum
// enum Role {
//   ADMIN = 10,
//   USER,
//   GUEST,
// }
// 할당된 숫자부터 +1씩 자동으로 할당됨
// 중간부터 할당도 가능

// enum 은 컴파일 결과, 사라지지 않고 자바스크립트의 객체로 변환됨

enum Language {
  korean = "ko",
  english = "en"
}

const user1 = {
  name: 'Yeony',
  role: Role.ADMIN,
  language: Language.korean
}

const user2 = {
  name: 'Jenny',
  role: Role.USER
}

const user3 = {
  name: 'James',
  role: Role.GUEST
}

console.log(user1, user2, user3);
// 컴파일 : ts-node chapter5.ts