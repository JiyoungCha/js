// Math 객체
// 수학적인 처리를 위한 속성과 메서드를 가진 객체
// Number 타입만 적용

// ceil(arg), round(arg), floor(arg)
// ceil(arg): 올림
// round(arg): 반올림
// floor(arg): 버림
let double = 0.9;
Math.ceil(double); // 1 
Math.round(double); // 1
Math.floor(double); // 0

// random(): 0초과 1미만의 랜덤한 수를 반환
console.log(Math.random());
// 1 ~ 10 난수
let randomDouble = Math.random();
console.log(randomDouble, Math.ceil(randomDouble * 10)); // 0 < n <= 10
console.log(randomDouble, Math.round(randomDouble * 10)); // 0 <= m <= 10

// 0. 저장용 배열 만들기(length: 11, 각 요소의 값은 0)
const arrSaveCnt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// 1. 루프 100만번 돌려
for(let i = 0; i < 1000000; i++) {
  //  1-1. 랜덤수 획득 'Math.ceil(Math.random() * 10)'
  const randomNum = Math.ceil(Math.random() * 10);

  //  1-2. 저장용 배열에 나온 숫자를 카운트해서 저장
  arrSaveCnt[randomNum]++;
};
// 2. 저장용 배열 확인
console.log(arrSaveCnt);

// abs(arg): 절대값을 반환
Math.abs(1); // 1
Math.abs(0); // 0
Math.abs(-1); // 1
