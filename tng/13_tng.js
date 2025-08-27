// - 아래의 프로그램을 만들어 주세요.
//     - 사과 게임 위에 장기 삽입
//     - 어메이징브릭에 베이지 배경색 추가
//     - 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정

changeLiColor();

// 새 노드 = createElement('li'); , textContent = '장기';
const newGame = document.createElement('li');
newGame.textContent = '장기';
// 부모 노드 = querySelector('#ul');
const ul = document.querySelector('#ul');
// 타겟 노드 = querySelector(#apple');
const appleGame = document.querySelector('#apple');
// 새로운 요소 삽입 > 부모 노드.insertBefore(새 노드, 타겟 노드);
ul.insertBefore(newGame, appleGame);


const amazingLi = document.querySelector('ul li:last-child');
amazingLi.style.background = 'beige';


function changeLiColor() {
const listLi = document.querySelectorAll('#ul li');
listLi.forEach((node, idx) => {
  if(idx % 2 === 1) {
    node.style.color = 'red';
  } else {
    node.style.color = 'blue';
  }
});
}

// const gameList = document.querySelectorAll('li');
// gameList[9].style.background = 'beige';

// for (let i = 0; i < gameList.length; i++) {
//   if(i % 2 === 1) {
//     gameList[i].style.color = '#ff0000';
//   } else {
//     gameList[i].style.color = '#0000ff';
//   }
// }

const result = {
  title: '타이틀',
  contnet: '내용',
  img: '카드이미지',
};card-title

function addCard(item){
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const newCardImg = document.createElement('div');
  newCardImg.classList.add('card-img');

  const newCardTitle = document.createElement('p');
  newCardTitle.classList.add('cardTitle'); 
  newCardTitle.textContent = item.title;

  const newCardContent = document.createElement('p');
  newCardContent.textContent = item.contnet;

  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardTitle);
  newCard.appendChild(newCardContent);

  document.body.appendChild(newCard);
};