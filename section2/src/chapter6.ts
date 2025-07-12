// any
// 특정 변수의 타입을 우리가 확실히 모를때 사용 ( any : 모든, 누구나 )

let anyVar: any = 10;

anyVar = "hello"; 
anyVar = true;
anyVar = {};
anyVar = () => {};
anyVar = [1, 2, 3];
anyVar.toUpperCase();
anyVar.toFixed(2);

let num: number = 10;
num = anyVar;
// num은 number 타입만 들어올 수 있는데, any 타입인 anyVar를 num에 담을 수 있다
// any 타입은 모든 타입으로 할당 가능

// any 타입은 타입스크립트가 갖는 이점을 다 포기하는 것과 같음 ( 최대한 사용하지 안는 것이 좋음 )
// 함수를 할당하고, toUpperCase() 메소드를 호출할 때, 런타임 에러가 발생할 수 있음

// * 런타임(runtime) 에러 
// 런타임 : 코드가 실제로 실행되는 시점
// 컨타임 에러 : 실행 중에 발생하는 예기치 못한 오류
// ex) const user = { name: "yeony" };
// [X] user.age.toUpperCase(); // user.age는 존재하지 않는 프로퍼티이므로, 런타임 에러가 발생함
// => 런타임 에러는 코드가 실행되기 전에는 알 수 없는 오류로, 디버깅이 필요함

// * 컴파일 타임(compile time) 에러
// 컴파일 타임 : 코드가 컴파일되는 시점
// 컴파일 에러 : 코드가 실행되기 전에 발생하는 오류
// 자바스크립트에서는 SyntaxError, TypeError 등이 컴파일 타임 에러에 해당


// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};
// any타입과 유사하게 모든 타입을 저장할 수는 있지만, 반대로 모든타입을 저장할 수는 없다
// [X] num = unknownVar;
// toUpperCase()와 같은 메소드나 사칙연산도 불가능

// 타입 정제, 타입 좁히기
// unknown 타입 활용하기 예)
if(typeof unknownVar === "number"){
  num = unknownVar;
}

// 되도록 any보다 안전한 unknown 사용하기