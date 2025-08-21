// object?
// 데이터 타입의 하나
const obj1 = {
  id: 1, 
  name: '홍길동',
  gender: '남자',
  age: 20,
  fnc1: (a, b) => a + b,
};

const obj2 = {
  title: '홍길동이 쓴 글이다.',
  userInfo: obj1,
};
obj2.userInfo.name = '갑순이';
console.log(obj2.userInfo.name);

// Optional chaining (ECMA 2022 추가)
// '?.'을 기준으로 앞의 평가대상이 undefined || null 이 아니면 처리를 계속 이어가고
// undefined || null 이면 false를 반환하고 멈춘다.
if(obj2.userInfo.rank) {
  obj2.userInfo.rank.test; 
};

obj2.userInfo?.rank?.test;

// ---------------------------------------------------
// 배열(Array) 객체
// 하나의 변수에 여러개의 값을 순차적으로 저장할 수 있는 데이터 구조
// 여러 종류의 데이터 타입을 저장 가능
// 배열의 길이는 동적으로 변화
// 각 요소는 0부터 시작하는 인덱스를 가진다.
const arr1 = [1, 2, 3, 4, 5];

console.log(arr1[1]); // 2

const arr2 = [
  [1, 2, 3],
  [4, 5, [20, 30, 40]],
  [7, 8, 9],
];

console.log(arr2[1][2][2]); // 40

// 배열 복사
// Spread Operator
// const arr3 = arr2;
// arr3[0] = [10, 20, 30];
// console.log(arr2);
const arr3 = [...arr2];
arr3[0] = [10, 20, 30];
console.log(arr3); 

const obj3 = {...obj1, name: '홍길동'};
console.log(obj3);

// length : 배열의 길이 반환
console.log(arr1.length); // 5

// isArray(arg) : 배열 여부를 체크
console.log(Array.isArray(arr1)); // true
console.log(Array.isArray(1)); // false

// indexOf(searchElement): 배열에서 특정 요소를 검색해서 인덱스를 반환
const arr4 = [1, 2, 'gil-don Hong', 4, 5];
console.log(arr4.indexOf('gil-don Hong')); // 해당 요소의 인덱스 반환 // 2
console.log(arr4.indexOf('Woonwoo Jun')); // 없으면 -1 반환 // -1

// includes(searchElement): 특정 요소의 존재여부 확인, boolean반환
console.log(arr4.includes('gil-don Hong')); // true 반환
console.log(arr4.includes('Woonwoo Jun')); // false 반환

// if 문 쓸 때
if(arr4.indexOf('gil-don Hong') > 0) {}; // true
if(arr4.includes('gil-dong Hong')) {}; // false

// push(...args): 원본 배열의 마지막 요소를 추가하고, 바뀐 length 반환
const resultLength =  arr4.push(100);
console.log(resultLength, arr4); // 6 [ 1, 2, 'gil-don Hong', 4, 5, 100 ]

// concat(...args): 배열의 마지막 요소를 추가한 새로운 배열을 반환
const arr5 = [1, 2, 3];
const resultConcat = arr5.concat(4);
console.log(arr5, resultConcat); // [ 1, 2, 3 ] [ 1, 2, 3, 4 ]

// pop(): 배열의 마지막 요소를 제거하고 , 제거한 요소를 반환
const arr6 = [1, 2, 3];
const resultPop = arr6.pop();
console.log(arr6, resultPop); // [ 1, 2 ] 3
arr6.pop();
console.log(arr6); // [ 1 ]

// unshift(...args): 원본 배열의 첫번째 요소를 추가, 변경된 length를 반환
const arr7 = [1, 2];
const resultUnshift = arr7.unshift(2, 3, 4);
console.log(arr7, resultUnshift); // [ 2, 3, 4, 1, 2 ] 5
const resultUnshift_2 = arr7.unshift(10);
console.log(arr7, resultUnshift_2); // [ 10, 2, 3, 4, 1, 2 ] 6

// shift(): 원본 배열의 첫번째 요소를 제거하고, 제거된 요소를 반환
const resultShift = arr7.shift();
console.log(arr7, resultShift); // [ 2, 3, 4, 1, 2 ] 10
const resultShift_2 = arr7.shift();
console.log(arr7, resultShift_2); // [ 3, 4, 1, 2 ] 2

// splice(start, count, ...args): 원본에서 특정 요소를 자른다.
const arr8 = [1, 2, 3, 4, 5, 6];
// start만 지정 했을 때
  // start가 양수 일 경우, 인덱스가 start인 요소부터 모두 제거하고 잘린 배열을 반환
  const resultSpliceStartPositive = arr8.splice(3);
  console.log(arr8, resultSpliceStartPositive); // [ 1, 2, 3 ] [ 4, 5, 6 ]
  // start가 음수 일 경우, 배열의 끝 요소부터 start만큼의 요소를 제거하고 잘린 요소를 반환
  const arr9 = [1, 2, 3, 4, 5];
  const resultSpliceStartNegative = arr9.splice(-3);
  console.log(arr9, resultSpliceStartNegative); // [ 1, 2 ] [ 3, 4, 5 ]
// start와 count만 전달할 경우
const arr10 = [1, 2, 3, 4, 5];
const resultSpliceCount = arr10.splice(2, 1);
console.log(arr10, resultSpliceCount); // [ 1, 2, 4, 5 ] [ 3 ]
const resultSpliceCountN = arr10.splice(-2, 1);
console.log(arr10, resultSpliceCountN); // [ 1, 2, 5 ] [ 4 ]
// start, count, ...args 모두 전달할 경우
const arr11 = [1, 2, 3, 4, 5];
const resultSpliceArgs = arr11.splice(1, 1, 100);
console.log(arr11, resultSpliceArgs); //[ 1, 100, 3, 4, 5 ] [ 2 ]

// join(separator): 배열의 요소를 구분자로 연결한 문자열을 만들어서 반환
const arr12 = [1, 2, 3, 4, 5];
const resultJoin = arr12.join(':');
console.log(resultJoin, arr12); //1:2:3:4:5 [ 1, 2, 3, 4, 5 ]

// sort(): 원본 배열의 요소를 문자열로 변환 후 오른차순 정렬을 해서 만든 배열을 반환
// (a - b)가 양수일 경우, a가 큰수, b가 작은수로 인식하여 정렬
// (a - b)가 음수일 경우, a가 작은수, b가 큰수로 인식하여 정렬
// (a - b)가 0일 경우, 같은 값으로 인식하여 정렬하지 않음
const arr13 = [5, 48, 65, 46832, 4864, 9];
const resultSort = arr13.sort();
console.log(resultSort, arr13); //[ 46832, 48, 4864, 5, 65, 9 ] [ 46832, 48, 4864, 5, 65, 9 ]
  // sort(callback)
  // const resultSort = arr13.sort((a, b) => a - b); //[ 5, 9, 48, 65, 4864, 46832 ]
  // const resultSort = arr13.sort((a, b) => b - a); //[ 46832, 4864, 65, 48, 9, 5 ]

// map(callback): 배열의 모든 요소에 대해 콜백함수를 반복하여 실행한 후, 새로운 배열을 반환
const arr14 = [1, 2, 3, 4, 5];
const resultMap = arr14.map(val => val *= 2);
console.log(arr14, resultMap); // [ 1, 2, 3, 4, 5 ] [ 2, 4, 6, 8, 10 ]

// for(let i = 0; i < arr14.length; i++) {
//   arr14[i] *= 2;
// }
// console.log(arr14); //[ 2, 4, 6, 8, 10 ]

// const resultMap = arr14.map(val => {
//   if(val % 3 === 0){
//     return '짝'
//   } else {
//     return val;
//   }
// }); [ 1, 2, '짝', 4, 5 ]

// 2의 배수만 '이'라고 출력
const arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const maptest= arr15.map(n => {
  if(n % 2 === 0) {
    return '이'
  } else {
    return n;
  }
})
console.log(maptest); // [ 1, '이', 3, '이', 5, '이', 7, '이', 9, '이']

// some(callback): 배열의 모든 요소에 대해 콜백 함수를 반복하여 실행 후,
//                 조건에 만족하는 결과가 하나라도 있으면 true, 없으면 false
const arr16 = [1, 2, 3, 4, 5];
const resultSome = arr16.some(val => val ===10);
console.log(resultSome); // false
const arr16_1 = [1, 2, 10, 3, 4, 5];
const resultSome_1 = arr16_1.some(val => val ===10);
console.log(resultSome_1); // true
const resultSome_2 = arr16_1.some(val => {
  if(val === 10) {
    return true;
  } else {
    return false;
  }
}) 
console.log(resultSome_2); //false

// every(callback): 배열의 모든 요소에 대해서 콜백함수를 반복 실행 후,
//                  모든 요소가 조건에 만족하면 true, 아니면 false
const arr17 = [1, 2, 3, 4, 5];
const resultEvery = arr17.every(val => val % 3 === 0);
console.log(resultEvery); //false
const resultEvery_1 = arr17.every(val => val % 1=== 0);
console.log(resultEvery_1); //true

// filter(callback): 배열의 모든 요소에 대해서 콜백함수를 반복 실행 후,
//                   조건에 맞는 요소만 모아서 새로운 배열로 반환
const arr18 = [1, 2, 3, 4, 5];
const resultFilter = arr18.filter(val => val % 2 === 0);
console.log(resultFilter); // [ 2, 4 ]

// forEach(callback): 배열의 모든 요소에 대해 콜백 함수를 반복 실행
const arr19 = [5, 4, 3, 2, 1];
arr19.forEach((val, key) => console.log(`${key} : ${val}`)); 

// Destructuring 문법: array 안에 있는 데이터들을 변수로 쉽게 저장하고 사용하기 위한 문법
const arr20 = [1, 2];
const num1 = arr20[0];
const num2 = arr20[1];

const [num3, num4] = arr20;
console.log(num3, num4);