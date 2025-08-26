class MyClass {
  // public  : 클래스 내외부 어디서든 접근 가능. 캡슐화 깨짐
  name; 
  // private : 클래스 내부에서만 접근 가능. 캡슐화
  #age; 
  //protected : 나와 상속관계에서 자식 클래스들은 접근 가능
  _addr; 
  // 정적 변수로서 인스턴스화를 하지 않아도 됨
  // 캡슐화가 안됨
  // 메모리 문제로 추천하지 않음
  static gender = 'M';  
  
  // 생성자 메소드
  // 'new' 키워드로 객체를 인스턴스화 할 때, 딱 한 번 실행되는 메소드
  constructor(name, age, addr) {
    //나 자신.명
    this.name = name;
    this.#age = age;
    this._addr = addr;
  }

  // getter / setter
  // 메소드지만 사용할 때 프러퍼티 사용 하듯이 동작한다.
  // getter
  get age() {
    return this.#age;
  }
  // setter
  set age(age) {
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

  // 인스턴스 메소드
  add(a, b){
    return a + b;
  }
}

const myClass = new MyClass('홍길동', 20, '조선');
const myClass2 = new MyClass('갑순이', 10, '한국');
console.log(myClass.age);
myClass.age = 40;
console.log(myClass.age);
console.log(myClass2.name);

// 프로퍼티 : 클래스에서 사용하는 변수
// 메소드 : 클래스에서 사용하는 함수
