// 변수의 이름 뒤에 콜론(:)과 함께 변수의 타입을 정의하는 이런 문법을 ‘타입 주석’ 또는 ‘타입 어노테이션’

// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// 리터럴 타입 : 하나의 값만 포함하도록 값 자체로 만들어진 타입
// 리터럴 -> 값
let numA: 10 = 10; // numA는 10만 넣을 수 있음
let strA: "hello" = "hello"; // strA는 hello만 넣을 수 있음
let boolA: true = true;