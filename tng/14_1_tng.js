// 버튼 접근
const writeBtn = document.querySelector('#writeBtn');
writeBtn.addEventListener('click', () => {
  const keywordInput = document.querySelector('#keyword');
  let keyword = keywordInput.value;

  // false | null | undefined | 0 | ''
  if(keywordInput.value) {
    // content 요소 생성
    const newContent = document.createElement('div');
    newContent.classList.add('content'); //content 클래스를 가진 div

    const newP = document.createElement('p');
    newP.textContent = keyword; // Keyword가 들어가는 p태그

    newContent.appendChild(newP); // p가 들어간 div

    // 서비스 2번 이벤트 추가
    newContent.addEventListener('click', (e) => {
      e.target.classList.toggle('toggle-line-through');
    });

    // 생성한 요소 추가
    const printBox = document.querySelector('.print-box');
    printBox.appendChild(newContent);

    // 검색어 초기화
    keywordInput.value = '';
  }
});

// 서비스
// 1. 엔터로 작성되게 하기
// 2. 아이템 클릭하면 완료, 다시 클릭하면 풀리기
const keywordInput = document.querySelector('#keyword');
keywordInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    e.preventDefault();
    const writeBtn = document.querySelector('#writeBtn');
    writeBtn.click();
  }
});