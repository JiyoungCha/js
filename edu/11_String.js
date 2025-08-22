// String 객체
let str = '문자열입니다.';

// lenght: 문자 열의 길이를 반환
console.log(str.length); // 7
console.log(str[1]); // 자

// charAt(idx): idx의 요소의 값을 반환
console.log(str.charAt(3)); // 입

// indexOf(searchStr, idx): 해당 문자열에서 searchStr을 찾아 최초의 인덱스를 반환
// 찾지 못하면 -1 반환
// idx는 생략 가능, start 지점 지정
str = '문자열입니다. 문자열입니다.';
// 같은 것이 있으면 왼쪽에서 시작해서 첫번째 만나는 것의 답을 내놓음
console.log(str.indexOf('열')); // 2
// idx 입력시 지정 위치부터 시작해서 찾는다.
console.log(str.indexOf('열', 3)); // 10
// 시작하는 문자의 위치를 알려준다.
console.log(str.indexOf('입니다.')); // 3
// 없는 글자를 넣으면 -1을 반환
console.log(str.indexOf('숫자')); // -1

// includes(searchStr, idx): 존재여부 체크할 때 이용. 가동성 향상
console.log(str.indexOf('숫자')); // -1
console.log(str.indexOf('문자')); // 0

// replace(pattern, replacement): pattern을 찾아서 첫번째 문자열을 replacement 치환한 문자열을 반환
// 찾은 것 중에 첫번째 거만 수정한다.
// 빈칸 ''으로 두면 삭제한다.
console.log(str.replace('문자열', '숫자')); // 자입니다. 문자열입니다.

// replaceAll(pattern, replacement): pattern을 찾아서 모든 문자열을 replacement 치환한 문자열을 반환
console.log(str.replaceAll('문자열', '함수')); //함수입니다. 함수입니다.

// substring(startIdx, endIdx): startIdx부터 endIdx까지 자른 문자열을 반환
// endIdx는 생략 가능
console.log(str.substring(3)); // 입니다. 문자열입니다.
console.log(str.substring(3, 5)); // 입니

// split(separator, limit): 문자열에서 separator 기준으로 각 문자열을 잘라 배열 요솔 담은 배열을 반환
// limit로 배열의 길이를 조절하며, 생략 가능
str = '탕수육,짜장면,짬뽕,크림새우';
let arr = str.split(',', 1); // (1) ['탕수육']
console.log(arr);

// trim(): 문자열의 시작과 끝에 있는 공백을 제거한 문자열을 반환
// 문자 사이의 띄워쓰기는 유지
str = '   문자   '
console.log(str.trim()); //'문자'

// toUpperCase(), toLowerCase(): 영어 대/소문자로 변환해서 반환
str = 'AfdkDGdiwVOGOWdfw';
console.log(str.toUpperCase()); // AFDKDGDIWVOGOWDFW
console.log(str.toLowerCase()); // afdkdgdiwvogowdfw