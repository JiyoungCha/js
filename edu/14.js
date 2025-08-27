// 이벤트
function test() {
  alert('테스트용입니다.');
}

// 프로퍼티 리스너 Property Listener
// 지금은 쓰지 않음
// 돌일한 이벤트를 여러번 사용 불가
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => {
  alert('테스트중입니다.');
}

// addEventListener 애드이벤트리스너
// 실질적으로 쓰이는 방법
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert('준비중입니다.');
});
btn3.addEventListener('click', btn3Alert);

function btn3Alert(event) {
  console.log(event);
  alert('준비중입니다.2');
}

// 로드 이벤트는 window에 줘야함
// 유저의 기기 성능에 따라 문제가 될 수 있음. 주의 요망
// window.addEventListener(이벤트명, 콜백함수);

// removeEventListener() : 이벤트 제거
// 미리 함수를 정해두고 진행.
btn3.removeEventListener('click', btn3Alert);

// window.addEventListener('load', () => {
//   window.open('https://www.naver.com/')
// })

// const inputEmail = document.querySelector('#email');
// inputEmail.addEventListener('keyup', (e) => {
//   console.log(e.target.value);
// });

const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keyup', (e) => {
  const regex = /^[0-9]+$/;
    
  const label = document.querySelector('#labeEmail');
  if(!regex.test(e.target.value)) {
    label.textContent = '숫자만 입력해주세요.';
  } else {
    textContent = '';}
});

// ----------비밀번호 보이게 하기---------
// 체크박스 접근
const chkPw = document.querySelector('#seePw');

// 체크박스에 체인지 이벤트 추가
chkPw.addEventListener('change', (e) => {
  // 인풋 패스워드 접군
  const pw = document.querySelector('#pw');
  
  // 체크 여부 확인
  if(e.target.checked) {
    // 인풋 패스워드 type속성 text로 변경
    pw.setAttribute('type', 'text');
  } else {
    // 인풋 패스워드 type속성 pasword로 변경
    pw.setAttribute('type', 'password');
  }
});