// 시간 표기
function clock() {
  // 현재 시간 가져오기
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  let timeText = ``;

  // 오전, 오후
  if (hours < 12) {
      timeText = `현재 시각 오전 ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  } else {
    timeText = `현재 시각 오후 ${(hours-12).toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  // 화면에 출력
  const timebox = document.querySelector('#time');
  const nowTime = document.querySelector('.timeClock');
  nowTime.textContent = timeText;
  timebox.appendChild(nowTime);
};

const nowClock = setInterval(clock, 1000);

clock();

// 멈춤 버튼
const stopBtn = document.querySelector('#stop');
stopBtn.addEventListener('click', () => {
  clearInterval(nowClock);
});

// 재시작 버튼
const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', () => {
  clock();
  setInterval(clock, 1000);
});

