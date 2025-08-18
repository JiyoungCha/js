// 변수: 변하는 데이터를 저장하기 위한 공간
var var1 = '제육';
let let1 = '햄버거';
// var: 중복 선언 가능(사용 지양)
// let / const: 중복 선언 불가능
// 변수 선언: 변수의 공간을 만들어 둠
// 변수 초기화: 변수에 값을 넣는 행위
// =(대입연산자): 오른쪽에 있는 데이터를 왼쪽에 대입하겠다.

// 상수: 최초에 대입한 값이 절대 변하지 않는 공간
const const1 = '뚝불';
// 설정값, 변하지 않는 값, 실수 줄이기 용
// 대문자 사용. 공백은 _ 사용

// var를 지양해야 하는 이유
// 1. var을 중복 선언이 가능하다.
var name = '홍길동';
var name = '갑돌이';
// 오류가 났음을 알려주지 않음. 다른 코드에서 같은 이름으로 변수 선언을 하면 꼬여서 에러남.

// let name2 = '둘리';
// let name2 = '도우너';
// 오류가 났음을 알려 줌.

// 2. 작성한 코드상, 선언보다 사용을 먼저 할 경우, 
// 오류가 발생하지 않고, 접근 가능한 현상
// console.log(age);
// var age = 20;

// 3. var는 기본적으로 함수레벨 스코프
// Scope의 종류: 
// -전역 스코프: 어디서든 접근 가능. 제한적 사용.
// -지역(함수레벨) 스코프: 함수 안에서 사용. 지역을 벗어나면 에러남.
// -블록레벨 스코프: 
var globalVar = 'globalVar';
let globalLet = 'globalLet';
const globalConst = 'globalConst';

function test() {
  var localVar = 'localVar';
  let localLet = 'localLet';
  const localConst = 'localConst';
  console.log(globalVar);
  console.log(globalLet);
  console.log(globalConst);

  console.log(localVar);
  console.log(localLet);
  console.log(localConst);
}

// test();

// console.log(globalVar);
// console.log(globalLet);
// console.log(globalConst);

// console.log(localVar);
// console.log(localLet);
// console.log(localConst);

if(true) {
  // 함수레벨 스코프: var
  var blockVar = 'blockVar';
  // 블럭레벨 스코프: let, const
  let blockLet = 'blockLet';
  const blockConst = 'blockConst';
}

console.log(blockVar);
console.log(blockLet);
console.log(blockConst);