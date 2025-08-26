// // 요소 선택 방법
// // HTML 요소의 ID로 선택 방법
const title = document.getElementById('title');
console.log(title);
title.style.color = 'blue';

// HTML 요소의 태그명으로 선택 방법
const tagH1 = document.getElementsByTagName('h1');
console.log(tagH1);
for(let i = 0; i < tagH1.length; i++) {
  tagH1[i].style.fontsize = '50px';
}

// // HTML 요소의 클래스명으로 선택 방법
const classH1 = document.getElementsByClassName('test');
classH1[0].style.color = 'red';

// *** 중요 *** 
// CSS 선택자로 요소를 선택하는 방법
// 복수일 경우 가장 첫번째 요소만 선택
const selectorTitle = document.querySelector('#title');
selectorTitle.style.color = 'red';

// *** 중요 *** 
// CSS 선택자로 요소를 선택하는 방법
// 복수일 경우 모두 선택, NodeList 객체
const selectorAllH1 = document.querySelectorAll('h1');
selectorAllH1.forEach(node => node.style.color = 'green');

// ----------------------------------------------------------
// 요소 조작
// ----------------------------------------------------------

// textContent: 컨텐츠를 획득 및 변경, 순수한 텍스트 데이터를 전달
selectorTitle.textContent = '<p>짜란</p>'; // <p>짜란</p> 보임
// innerHTML: 컨텐츠를 회득 및 변경, 태그는 태그로 인식해서 전달
selectorTitle.innerHTML = '<span>짜라잔~</span>'; // '짜라잔~' 보임
// 보안문제 발생

// 요소에 속성을 추가
// setAttribute(속성명, 값): 요소에 속성을 추가
const inputEmail = document.querySelector('input');
inputEmail.setAttribute('placeholder', '이메일을 적어주세요.');
inputEmail.setAttribute('required', '');

// removeAttribute(속성명): 요소의 속성을 제거
selectorAllH1[1].removeAttribute('style')

// --------------------------------------------------------
// 요소 스타일링
// --------------------------------------------------------

// style: HTML 요소에 인라인 스타일 추가
title.style.color = 'red';

// classList: HTML 요소에 클래스로 스타일 추가
const p = document.querySelector('p');
p.classList.add('test2'); // 추가
p.classList.remove('test2'); // 제거
p.classList.toggle('test2'); // 넣었다 뺐다

