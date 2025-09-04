const user = {
  name: 'Hong',
  age: 20,
  friends: {
    id: 90
  }
};

// 얕은 복사: 최상위 계층의 요소만 독립적으로 복사, 그 외 계층은 참조형태로 복사
// const shallowCopy = {...user};
// shallowCopy.friends.id = 100;

// console.log(user.friends); // id: 100
// 데이터 오염 발생

// 딥카피: 모든 계층의 요소를 독립적으로 복사
const jsonCopy = JSON.parse(JSON.stringify(user));
jsonCopy.friends.id = 200;

console.log(user.friends, jsonCopy.friends); // 90, 200 (원본 오염 없음)

// Node.js 17+ 또는 최신 브라우저 환경
const cloneCopy = structuredClone(user);  
cloneCopy.friends.id = 200;

console.log(user.friends, cloneCopy.friends); // 90, 200

// -----------------------
// Destructuring
// -----------------------
const arr = ['hong', 20];

// const [name, age] = arr; 
// const [name] = arr; // 맨 앞에 있는 것에 할당
// const [, age] = arr; // 두번째에 할당

// console.log(name, age);

const user2 = {
  name: 'Hong',
  age: 20,
  friends: {
    id: 90
  }
};

const {name, age, friends} = user; // 키 명과 동일해야함. 순서 상관x

console.log(name, friends); // Hong {id: 90}