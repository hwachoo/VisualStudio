//function/basic.js

//1. 함수선언식으로 정의
function sum(num1, num2) {
  console.log(num1, num2);
  return num1 + num2;
}
//return이 없으면 결과값을 받아오지 못함(undefined)
//변수 선언한 개수를 넘어서는 값이 있어도 오류가 발생하지 않음(변수 개수만큼 입력됨)
//=> let sum = function(num1, num2) {}
let result = sum(10, 20, 30);
console.log('결과는 ' + result);

//2. 함수표현식으로 정의
let myfnc = function(val1, val2) { //funtion을 제외하고 =>로 표현 가능
  var myVal = 10;
  return val1 + val2 + myVal;
}
console.log(typeof myfnc, myfnc);
result = myfnc(10, 20);
console.log(result);

let mysum = myfnc;
result = mysum(20, 30);
console.log(result);
//function sum으로 인해 이미 생성되었다고 오류출력

const person = {//object 타입 person 변수 선언
  fullName: 'Hong',
  age: 20,
  height: 175.3
}
const person1 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}
const person2 = {
  fullName: 'Kim',
  age: 25,
  height: 165.3
}
//함수표현식 myinfo.
let myinfo = function(obj) {//매개값으로 들어온 타입이 obj이면 값을 반환함
  var info = `${obj.fullName}이고 ${obj.age}살이고 ${obj.height}cm입니다.`; //obj의 값 호출
  return info; //info 반환
}

result = myinfo(person); //myinfo=person변수를 result로 
console.log(result); //result 호출

//배열 활용 각 요소들 출력.
const persons = [person, person1, person2]; //위의 객체 담을 배열 선언
for(let person of persons) {//확장for문, persons를 담을 person 변수 선언 
  let result = myinfo(person);//myinfo(person)변수 활용
  console.log(result);
}

// persons.forEach(function (val, ind, ary){
//   console.log(val, ind, ary);
// });

console.clear();
//자바스크립트에서 문자열, 숫자, boolean, 배열을 매개값으로 쓸 수 있음
//함수를 매개변수로 사용가능함
persons.forEach(function (val, ind, ary){
  // console.log(val, ind, ary);
  console.log(myinfo(val));
});
//val = 배열에 있는 값들, ind = 인덱스, 배열의 넘버, 
//{배열}에 들어있는 개수만큼 ()에 정의된 함수의 기능을 실행

console.clear();
let funcParam = function (val, ind, ary) {
  console.log(myinfo(val));
};
persons.forEach(funcParam);//메소드의 매개값으로 활용되는 함수 - 콜백함수

// console.clear();
// let funcParam = function (val, ind, ary) => { //=> 화살표함수
//   console.log(myinfo(val));
// };
// persons.forEach(funcParam);
