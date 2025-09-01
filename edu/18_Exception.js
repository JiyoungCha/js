// 처리 로직이 잘못 작성된 경우가 99.99%
// Error
// ├── EvalError 지금은 안 씀
// ├── RangeError 범위가 벗어난 경우
// ├── ReferenceError 참조 에러
// ├── SyntaxError 문법 에러
// ├── TypeError 데이터타입 에러
// └── URIError 잘못된 URI(Uniform Resource Identifier, 리소스를 식별하기 위한 표준 방식) 에러

let divVal = 0;
try {
  // 내가 처리하고 싶은 로직을 작성하는 영역
  console.log('트라이 시작');
  // const t =1;
  // t =2;
  if(divVal < 1) {
    // 강제 예외 발생
    throw new Error('유저 입력값이 0임');
  }
  10 / divVal;
  console.log('트라이 끝');
} catch (err) {
  // try문에서 에러가 발생했을 때, 처리한 로직을 작성하는 영역
  console.log('예외 발생');
  if(err instanceof TypeError) {
    console.log('타입에러 발생');
  } else if(err instanceof ReferenceError) {
    console.log('참조에러 발생');
  }
} finally {
  // 정상, 에러 여부 상관없이 무조건 실행되는 로직을 작성하는 영역
  console.log('파이널리 실행');
}

