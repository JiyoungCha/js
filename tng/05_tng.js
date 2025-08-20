// 아래처럼 별을 찍어주세요.
// *****
// *****
// *****
// *****
// *****
// let star = '*';

// let line = 5;
// let starmun = 5;

// for(let i = 0; i < line; i++) {
//   let makedStar = '';

//   for(let z = 0; z < starmun; z++) {
//     makedStar += star;
//   }
//   console.log(`${makedStar}`);
  
// }

// let makedStar = '';
// for(let lineCnt = 0; lineCnt < 5; lineCnt++) {
//   makedStar += '*'
//   console.log(makedStar);
// }
let makedStar = '';

for(let lineCnt = 5; lineCnt > 0; lineCnt--) {
  makedStar += '*';
  let makedSpace = '';

  for(let spaceCnt = 1; spaceCnt < lineCnt; spaceCnt++) {
    makedSpace += ' ';
  }
  console.log(makedSpace + makedStar);
}