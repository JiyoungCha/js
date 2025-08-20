
// let cnt = 0;

// while(true) {
//   console.log(cnt)
//   cnt++;
// // }

// // while(true) {
// //   console.log('while문 시작');
  
//   if(cnt >= 3) {
//     break;
//   }
// //   console.log('while문 끝');
// }

// 구구단 2단만 while문으로

let i = 1;

// while(i <= 9) {
//   console.log(`2 X ${i} = ${2 *i}`);
//   i++;
// }

// for문, while문 : 조건 확인 후 실행
// do-while 문
// 1회 실행 후 조건 확인
do {
  console.log(`2 X ${i} = ${2 *i}`);

  i++
} while(i <= 9);

// 선언 키워드 없이 적으면 'var'로 인식됨