nowTimeInputElement('#nowTime');

let intervalNowTime =  setInterval(() => {
  nowTimeInputElement('#nowTime')
}, 1000);

// 멈춰!! 버튼 처리
const btnStop = document.querySelector('#btnStop');
btnStop.addEventListener('click', () => {
  clearInterval(intervalNowTime);
  intervalNowTime = null // 오류 제거 방법
});

// 재시작 버튼 처리
const btnRestart = document.querySelector('#btnRestart');
btnRestart.addEventListener('click', () => {
  nowTimeInputElement('#nowTime');
  
  if(intervalNowTime === null) { // 오류 제거 방법
    intervalNowTime = setInterval(() => {
      nowTimeInputElement('#nowTime');
    }, 1000);
  }
});

// 기록 버튼 처리
const btnReport = document.querySelector('#btnReport');
btnReport.addEventListener('click', () => {
  const container = document.querySelector('.reportContainer');
  const newP = document.createElement('p');
  newP.textContent = generateNowTimeFormatUntilMilliseconds();
  // newP.textContent = document.querySelector('#nowTime').textContent;
  container.appendChild(newP);
});

// 기록 초기화
const btnReportReset = document.querySelector('#btnReportReset');
btnReportReset.addEventListener('click', () => {
  document.querySelector('.reportContainer').textContent = '';
});

// ---------- 이하 함수----------

// JSDoc 쓰는 방법
/**
 * selector로 선택한 요소의 textContent에 현재시간 삽입
 * @param {string} selector 
 */
function nowTimeInputElement(selector) {
  const element = document.querySelector(selector);
  element.textContent = generateNowTimeFormat();
}
// selector: 사용할 수 있는 범위 늘어남

// ``으로 묶어두면 하이라이트 들어감
/**
 * 현재 시간을 `오전 hh:MM:SS`형식으로 반환
 * @returns {string}
 */
function generateNowTimeFormat () {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = '';
  if(hours < 12) {
    ampm = `오전`;
  } else {
    ampm = `오후`;
    hours -= 12;
  }

  return `${ampm} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * 현재 시간을 `오전 hh:MM:SS.sss`형식으로 반환
 * @returns {string}
 */
function generateNowTimeFormatUntilMilliseconds  () {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let milliseconds = now.getMilliseconds(); 
  let ampm = '';
  if(hours < 12) {
    ampm = `오전`;
  } else {
    ampm = `오후`;
    hours -= 12;
  }

  return `${ampm}`
    + `${hours.toString().padStart(2, '0')}:` 
    + `${minutes.toString().padStart(2, '0')}:`
    + `${seconds.toString().padStart(2, '0')}.`
    + `${milliseconds.toString().padStart(3, '0')}`;
}