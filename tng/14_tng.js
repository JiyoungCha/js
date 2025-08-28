const formBox = document.querySelector('.formBox'); // 모르겠다 혹시 몰라 만들어둠

// 텍스트 박스에 접근
const textBox = document.querySelector('#textBox');

// 새로 생성되는 카드
const result = {
  content: '',
};

function addCard(item) {
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const newItmeContent = document.createElement('p');
  newItmeContent.classList.add('cardContent');
  newItmeContent.textContent = item.content;

  newCard.appendChild(newItmeContent);

  formBox.appendChild(newCard);
}

// 버튼 접근
const button = document.querySelector('#button');

// 버튼 이벤트
button.addEventListener('click', (e) => {
  e.preventDefault(); // 폼 이벤트 정지
  const inputText = textBox.value.trim();
  if(inputText === '') return;
  const item = {
    content: inputText
  };
  addCard(item);
  textBox.value = '';
});
