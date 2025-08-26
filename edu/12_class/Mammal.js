// 추상화 : 여러 객체에서 공통된 기능이나 속성을 상위 부모 계체로 만드는 것
class Mammal {
  _name;
  _residence;

  constructor(name, residence) {
    this._name = name;
    this._residence = residence;
  }

  breath() {
    console.log(`${this._name}가 폐호흡합니다.`);
  }
}

class Whale extends Mammal {
  constructor(name, residence) {
    super(name, residence);
  }

  // 오버라이딩 : 부모 계체 것을 무시하고 재정비
  breath() {
    console.log(`눈누난나`);
  }

  swimming() {
    console.log(`${this._name}가 헤엄칩니다.`);
  }


  
}

class FlyingSquirrel extends Mammal {
  constructor(name, residence) {
    super(name, residence);
  }

  flying() {
    console.log(`${this._name}가 날아갑니다.`)
  }
}

const whale = new Whale('고래', '바다');
whale.breath();