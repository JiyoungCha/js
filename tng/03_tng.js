// IF로 만들어주세요.
// 성적 
// 범위 : 
//	100   : A+
//	90이상 100미만 : A
//	80이상 90미만 : B
//	70이상 80미만 : C
//	60이상 70미만 : D
//	60미만: F

//출력 문구 : "당신의 점수는 XXX점 입니다. <등급>"

let score = -2;
let rank = 0;

if (score > 100 || score < 0) {
  console.log('잘못된 값입니다.')
} else {
// if(score === 100) {
//   console.log('"당신의 점수는' + score + '점 입니다.<A+>"');
// } else if(score >= 90 && score < 100) {
//   console.log('"당신의 점수는' + score + '점 입니다.<A>"')
// } else if(score >= 80 && score < 90) {
//   console.log('"당신의 점수는' + score + '점 입니다.<B>"')
// } else if(score >= 70 && score < 80) {
//   console.log('"당신의 점수는' + score + '점 입니다.<C>"')
// } else if(score >= 60 && score < 70) {
//   console.log('"당신의 점수는' + score + '점 입니다.<D>"')
// } else {
//   console.log('"당신의 점수는' + score + '점 입니다.<F>"')
// } 

// if(score === 100) {
//   rank = 'A+';
// }
// if(score >= 90 && score < 100) {
//   rank = 'A';
// }
// if(score >= 80 && score < 90) {
//   rank = 'B';
// }
// if(score >= 70 && score < 80) {
//   rank = 'C';
// }
// if(score >= 60 && score < 70) {
//   rank = 'D';
// }
// if(score < 60) {
//   rank = 'F';
// }

if(score === 100) {
  rank = 'A+';
} else if(score >= 90) {
 rank = 'A';
} else if(score >= 80) {
  rank = 'B';
} else if(score >= 70) {
  rank = 'C';
} else if(score >= 60) {
  rank = 'D';
} else {
  rank = 'F';
}

console.log('"당신의 점수는'.concat(score, '점 입니다.<', rank, '>"'))
}

// 삼항 연산자

let score1 = 89;

let rank1 = 
  (score1 > 100 || score1 < 0) ? '잘못된 값입니다.' :
  (score1 === 100) ? 'A+' :
  (score1 >= 90) ? 'A' :
  (score1 >= 80) ? 'B' :
  (score1 >= 70) ? 'C' :
  (score1 >= 60) ? 'D' : 'F';

(score1 > 100 || score1 < 0)
  ? console.log(rank1)
  : console.log(`당신의 점수는 ${score1}점 입니다.<${rank1}>`);