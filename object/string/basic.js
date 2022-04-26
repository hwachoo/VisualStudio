//string/basic.js
//문자열 vs 문자열 객체

let str1 = '문자열';
console.log(typeof str1); //string 타입

let str2 = new String('문자열'); //new로 생성되는 키워드는 object로 생성됨
console.log(typeof str2);

console.log(str1 == str2); //비교연산자 a == b a와b의 값을 비교
//둘 다 타입은 다르지만 값은 같으므로 true 반환
console.log(str1 === str2); // a === b 값과 타입을 비교
//값은 같지만 타입은 각각 string, object이기 때문에 false 반환

let result = str1.substring(0, 2); //index: 0 ~ index: 2 사이의 값을 잘라서 가져옴
console.log(result);
let result1 = str2.substr(0, 2); //index 0 크기 2까지 잘라냄
console.log(result1);

const cal1 = '1 + 2 * 3'; // string타입
const cal2 = new String(1 + 2 * 3); //object타입

//eval() : 문자열 => 수식으로 변경시켜 처리해주는 함수
console.log(eval(cal1)); // 1 + 2 * 3 => 7
console.log(eval(cal2.valueOf())); // eval함수를 써도 object타입임
//valueof를 쓰지 않으면 오류 출력됨
//valueof = object타입을 문자열로 변환

//trim() : 좌우의 여백 잘라내기
console.log(' 문자열 공백 테스트 '.trim());
console.log(' 문자열 공백 테스트 '.trimStart()); //왼쪽(시작점) 공백만 잘라냄
console.log(' 문자열 공백 테스트 '.trimEnd()); //오른쪽(끝지점) 공백만 잘라냄
//trimstart, trimend 같이 사용하면 trim과 같은 효과(쓸 일 없음)

//문자열 공백 제거
result = ' 문자열 공백 테스트 '.split(' '); //매개변수로 들어온 값(예문의 ' ')을 기준으로 문장을 잘라서 배열형태로 변환
// [' ', '문자열', '공백', '테스트', ' '] 출력됨
result = result.filter(function(val) {
  return val;
}); //매개값으로 들어온 기능에 따라 배열의 각 요소의 true값을 배열로 전환
//false값인 ' '을 제외한 나머지 값들을 가져옴
console.log(result); 
console.log(result.join(''));//배열 -> 문자열로 변환

result = ' 문자열 공백 테스트 '.split(' ').filter(val => val).join(',');
console.log(result); 



//자바스크립트 boolean값 : null, '', 0, undefined -> false
if('문자열') { //if(값)이 true여야만 반환이 되는데 null을 쓰면 false이기 때문에 console이 출력되지 않음
  //!null을 입력하면 null(false)값이 아닌 true가 되기 때문에 console 출력됨
  console.log('false값.');
}

//slice, substring, substr(Deprecated);
console.log('안녕하세요 반갑습니다.'.slice(0, -6)); //index값 기준 0번쨰부터 5개(index 0 ~ 4)까지만 가져오고 그 아래는 잘라냄
//slice = 매개변수에 음수를 가질 수 있음
console.log('안녕하세요 반갑습니다.'.substring(0, 6));
console.log('안녕하세요 반갑습니다.'.substr(2, 3)); //시작위치, 문자크기

//toString() : 문자열로 변환
let num1 = 123;
console.log(typeof num1); //숫자가 입력되어 있기 때문에 number타입임
num1 = num1.toString();
console.log(typeof num1); //number타입에서 string타입으로 변환됨

true.toString(); //'true'라는 문자열로 변환(boolean타입이 아님)

let obj= {
  key:'Hong',
  value: 15
}
console.log(obj.toString()); //object타입은 tostring을 통해 문자열로 변환하지 못함
console.log(obj.key.toString()); //개별적으로 tostring을 부여하면 문자열로 변환됨
console.log(obj.value.toString());
