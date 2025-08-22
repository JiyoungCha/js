// Date 객체
// 로컬 타임존에 따른 유닉스 타임스탬프 기반으로 동작
// 타임존(TZ): 특정 지역의 시간
// 유닉스 타임스탬프: 1970년 1월 1일 00:00:00 기반으로 몇 초가 흘렀는가
const Timenow = new Date();
console.log(Timenow.getTime()); // 1755851980519

// Date 인스턴스
const now = new Date(); // arg가 없으면 현재 시간
console.log(now); // Fri Aug 22 2025 12:59:37 GMT+0900 (대한민국 표준시)

// 특정 날짜 지정
const date1 = new Date('1990-02-23 14:30:00');
console.log(date1); // Fri Feb 23 1990 14:30:00 GMT+0900 (대한민국 표준시)

const date2 = new Date(1980, 10, 10, 23, 0, 1);
console.log(date2); // Mon Nov 10 1980 23:00:01 GMT+0900 (대한민국 표준시)
// 달은 0 ~ 11 을 인식. 0이 1월 11이 12월

const date3 = new Date(546831585); 
console.log(date3); //Wed Jan 07 1970 16:53:51 GMT+0900 (대한민국 표준시)

// .getFullYear(): 연도 획득
const nowYear = now.getFullYear();
console.log(nowYear); // 2025

// .getMonth(): 월 획득, (**주의** 0~11로 반환)
const nowMonth = now.getMonth() + 1; 
// +1을 안 붙이면 현재 달의 순번의 달을 반환(ex. 8월이면 7반환)
console.log(nowMonth); // 8

// getDate(): 일 획득
const nowDate = now.getDate();
console.log(nowDate); // 22

// getHours(): 시를 반환
const nowHours = now.getHours();
console.log(nowHours); // 13

// getMinutes(): 분을 반환
const nowMinutes = now.getMinutes();
console.log(nowMinutes); // 20

// getSecons(): 초를 반환
const nowSeconds = now.getSeconds();
console.log(nowSeconds); // 21

// getMilliseconds(): 밀리초를 반환
const nowMillseconds = now.getMilliseconds();
console.log(nowMillseconds); // 640

// getDay(): 요일을 반환(**주의** 0~6 반환, 0 = 일요일)
const nowDay = now.getDay();
console.log(nowDay); // 5(금요일)

// 요일 한글로 변환
let koreanDay = '';
switch(nowDay) {
  case 0:
    koreanDay = '일요일';
    break;
  case 1:
    koreanDay = '월요일';
    break;
  case 2:
    koreanDay = '화요일';
    break;
  case 3:
    koreanDay = '수요일';
    break;
  case 4:
    koreanDay = '목요일';
    break;
  case 5:
    koreanDay = '금요일';
    break;
  case 6:
    koreanDay = '토요일';
    break;    
} console.log(koreanDay);

// xxxx년xx월xx일 XX:XX:XX 금요일
const nowFormat1 = `${nowYear}년 ${nowMonth}월 ${nowDate}일 ${nowHours}:${nowMinutes}:${nowSeconds} ${koreanDay}`;
console.log(nowFormat1); // 2025년 8월 22일 17:56:12 금요일

const nowFormat = `${nowYear}년 ${lpad(nowMonth, 2, '0')}월 ${lpad(nowDate, 2, '0')}일 ${lpad(nowHours, 2, '0')}:${lpad(nowMinutes, 2, '0')}:${lpad(nowSeconds, 2, '0')} ${koreanDay}`;
console.log(nowFormat); // 2025년 08월 22일 17:56:12 금요일
// console.log(typeof(nowYear), typeof(nowYear.toString()), typeof(String(nowYear)));

// 한 자리 수가 나올 때 앞을 0으로 만들기
function lpad(origin, length, fillStr) {
  // origin의 타입 체크
  if(typeof(origin) === 'number') {
    origin = origin.toString();
  }
  return origin.padStart(length, fillStr);
}

// 둘 날짜의 차 구하는 방법
const tagerDate = new Date('2025-03-13 18:10:00');
const diff = Math.floor(Math.abs(tagerDate - now) / (1000 * 60 * 60 * 24));
// 일단위 1000 * 60 * 60 * 24
console.log(diff);