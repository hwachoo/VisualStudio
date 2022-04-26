//string/basic2.js

//indexof(), lastIndexof() : 찾을 문자열의 위치(index)를 반환
let result = '안녕하세요 홍길동입니다. 대구의 홍길동입니다.'.indexOf('홍길동');//6 반환
result = '안녕하세요 홍길동입니다. 대구의 홍길동입니다.'.indexOf('홍길둥');//-1 반환(없음)
result = '안녕하세요 홍길동입니다. 대구의 홍길동입니다.'.lastIndexOf('홍길동');//18 반환(마지막 위치)
result = '안녕하세요 홍길동입니다, 서울의 홍길동, 대구의 홍길동입니다.'.indexOf('홍길동', 15);//17 반환(15 이후 첫번째 홍길동 반환)

let str1 = '안녕하세요 홍길동입니다, 서울의 홍길동, 부산의 홍길동, 대구의 홍길동입니다.'; // 
let position = str1.indexOf('부산');
result = str1.indexOf('홍길동', position);

//charAt(index) : 인덱스 위치의 문자반환
let str2 = str1.charAt(result);
console.log(str2);

//toLowerCase(), toUpperCase() : 문자변경
let str3 = 'Lorem ipsum DOLOR sit amet consectetur dolor'; 
console.log(str3.toUpperCase().toLowerCase());

//includes('찾을 문자열') : true/ false
result = str3.includes('dolor'); //대소문자 구분함
console.log(result);

//search('찾을 문자열) 추가기능: search(정규표현식); 찾을 문자열의 인덱스 반환
result = str3.search('dolor'); //대소문자 구분함
console.log(result);

//정규표현식 object / /(new RegExp()) - 대체로 사용하는 방법, 배열 [](new Array(1, 2)) - 거의 사용하지 않는 방법,
result = str3.search('dolor'); //대소문자 구분함
result = str3.search(/dolor/i); //i= 대소문자 구분없이 검색
console.log(result);

//match('찾을 문자열') : 문자열 or null 반환
let str4 = 'bad MORNING, goodmorning, GOOD AFTERNOON, good evening, and good night';
result = str4.match('goods'); //값이 없으므로 null 반환
result = str4.match(/good/ig); //대소문자 구분 없이 일치하는 값 전부 반환
result = str4.match(/good\s\w/ig);//'GOOD A, 'good e', 'good n' 출력 goodmorning은 공백이 없어서 출력되지 않음
result = str4.match(/good\s\w+/ig);//'GOOD AFTERNOON, 'good evening', 'good night' 출력
// \s : 공백 \w : 문자하나  \w+ 문자가 최소 하나 이상
console.log(result);

// replace('찾을 문자열', '바꿀 문자열');
result = str4.replace('good', 'better');//첫번째 good이 나오는 goodmorning만 better 변환
result = str4.replace(/good/ig, 'better'); //good이 전부 변환
result = str4.replace(/\W/ig, '-'); //s: 공백 전부를 -으로 변환 W : 문자 이외(특수문자까지 변환).
result = 'morning1 moning12 morning123'.replace(/\D/g, ''); //d: 숫자 D: 숫자 이외

let sso = ['970101-1234567', '970101 2234567', '9701013234567', '970101/4234567'];
sso.forEach(num => console.log(num.replace(/\D/g, '')));

console.log(result);

//문자열 합치기: +, concat()
console.log('hello' + 'world');
console.log('hello'.concat('world', '!!', 'welcome'));

