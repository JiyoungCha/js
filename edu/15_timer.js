// 타이머(Timer)
// 일정 시간이 지난 후 작업을 실행하는 함수
// const timeoutNum1 = setTimeout(useCallback, time(미리세컨드단위));
const timeoutNum1 = setTimeout(() => {
  console.log('2');
}, 2000); //2초 뒤에 값이 나옴

// setTimeout 취소
clearTimeout(timeoutNum1); // 해당 함수를 지우고 바로 다음 작업 실행

// 일정 시간마다 반복해서 실행 함수
const intervalID = setInterval(() => {
  console.log('인터벌 3초');
}, 3000);

// setInterval() 제거
clearInterval(intervalID);
setTimeout(() => {
  clearInterval(intervalID);
}, 6000); // 6초 후에 꺼짐