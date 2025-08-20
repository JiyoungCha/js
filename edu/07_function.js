// 함수(Function)
// 입력을 받아 출력을 하는 일련의 과정을 정의한 것

// 함수 선언식
// 매개변수(parameter): 외부로 부터 입력받은 값을 저장하는 변수(ex.a, b)
function fnc1(a, b) {
  // let a = 1;<<이러면 곤란
  return a + b;
}
function fnc2(){
  return 1000 * 60;
}
// 인수(Argument): 함수를 호출할 때 전달 해주는 값
let resultFnc1 = fnc1(1, 2);
console.log (resultFnc1);
console.log(fnc1(2, 3));
console.log(fnc2());

// 함수 선언식 : 호이스팅에 영향을 받는다.
// 재할다잉 가능하므로, 함수명이 중복되지 않도록 조심해야한다.
function fnc3(a, b) {
  return a + b;
}

function fnc3(a, b) {
  return a + b - 9999;
}

console.log(fnc3(1, 2));
// 아래에 있는 함수로 결과가 나옴

// 함수 표현식: 호이스팅에 영향을 받지 않는다.
// 재할당이 불가능
const fnc4 = function(a, b) {
  return a + b;
}

// 화살표 함수
// {} 생략시 return 도 함께 생략
const fnc5 = (a, b) => a + b;

const fnc6 = function(a) {
  let test = a / 2;
  return test;
}
const fnc7 = a => {
  let test = a / 2;
  return test;
}

let num1 = 1;
let num2 = num1;
console.log(num1, num2);
num1 = 2;
console.log(num1, num2);

let obj1 = {age: 20};
let obj2 =obj1;
console.log(obj1, obj2);
obj1.age = 30;
console.log(obj1, obj2);

// 콜백 함수(Callback Function)
// 다른 함수의 파라미터로 전달되어서 특정 조건에 따라 호출되는 함수
function myChk(callback) {
  callback(); 
}

const test11 = () => console.log('콜백함수'); 
myChk(test11);