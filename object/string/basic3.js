//string/basic3.js
//'hello', "hello", `hello` = 문자열 표현방법
let str1 = 'hello';

console.log(`${str1}`);

let str2 = `Welcome
to my home,
This is house.
`; //줄바꿈을 해도 표현됨
str2 = 'Welcome\nto my home, \nThis is house.\n';
console.log(str2);

let age = 22;
console.log(`${age>=20? '성인':'청소년'}`); //age의 값이 20이상이면 성인 아닐 경우 청소년 반환

