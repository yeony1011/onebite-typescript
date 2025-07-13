// void : 아무것도 없음을 의미하는 타입
// void -> 공허 -> 아무것도 없다.

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}
// 함수에서 null타입, undefined타입으로 설정하면, 무조건 return 을 사용해 null이나 undefined를 반환해야함
// return을 사용하고 싶지 않은 함수의 반환값 타입으로 void 사용

let a: void;
// [X] a = 1;
// [X] a = "hello";
// [X] a = {};
a = undefined; // [O] void타입에서는 undefined만 가능
// 단, tsconfig.json 에서 엄격한 ull 검사 옵션(strictNullChecks)을 false로 끄면 변수에 null 담을 수 있음

// never : 불가능한 타입
// never -> 존지하지 않는

function func3(): never {
  while(true){}
}
// 절대 반환값이 있는 자체가 모순일때 never 사용

// 사용 예)
function func4(): never {
  throw new Error();
}

// void와 달리, 변수가 never타입일 경우 strictNullChecks false여도 변수에 어떠한 값도 담을 수 없음
// any타입의 값도 never타입의 변수에 담을 수 없음
// let anyVar: any;
// [X] let b: naver = anyVar;