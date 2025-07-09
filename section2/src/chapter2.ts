// 배열
// 기본
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "yeony"];

// <asdf> : 제네릭 타입
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양한 경우
// ( | )  : 유니언 타입
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
]

// 튜플 타입 (자바스크립트에는 없고, 타입스크립트에만 있는 타입)
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// [X] tup1 = [1,2,3];
// [X] tup1 = ["hello", "world"];
tup1 = [1, 2];

let tup2: [number, string, boolean] = [1, "hello", true];
// [X] tup2 = ["ie", 1, true]; 

// 배열 메소드를 사용할 때는, 길이 제한이 발동하지 않아 오류 발생하지 않음
// 고정된 배열이어도 push, pop 등의 메소드 사용가능
// 튜블에서 배열 메소드 사용시 주의 필요
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();

const user: [string, number][] = [
  ["yeony", 20],
  ["jenny", 25],
  ["james", 30],
  ["john", 35],
  // [40, "jake"], // 타입 오류 발생할때 튜플타입을 사용하면 유용
];