//practice2.js
//{object} = 자바의 instance
const person1 = {//object 타입 person 변수 선언
  fullName: 'Hong',
  age: 20,
  height: 175.3
}
const person2 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}
const person3 = {
  fullName: 'Kim',
  age: 25,
  height: 165.3
}

//참조타입변수
// const person4 = person1;
// person1.fullName = 'hwang';
// person1의 값이 바뀌면 person4도 1을 참조하기 때문에 같이 변함
// console.log(person1.fullName);
// console.log(person4.fullName);

//자바의 {배열}과 자바스크립트의 [배열]은 괄호가 다름
const persons = [person1, person2, person3];

let avgAvg = 0;
let sum = 0;
for(let person of persons) {
  sum += person.age; //persons의 나이를 전부 더함
  
}
avgAvg = sum / persons.length; //나이 합계를 persons의 수만큼 나눔
console.log(`평균나이: ${avgAvg}`)

console.clear();
let avgAvgFnc = function(val) {
  sum += val.age;
}
let avgHigh = function(val){
  sum+= val.height;
}
sum = 0;
persons.forEach(avgHigh); //foreach에 어떤 기능을 넣느냐에 따라 console에서 출력되는 값이 다름
avgAvg = sum / persons.length;
console.log(`평균키: ${avgAvg}`)

let tag = "";
//이름, 나이, 키 배열 불러오기
let allPerson = function(val, idx){
  if(idx == 0) {
    tag += '<ul>';  
  }
  tag += `<li> ${val.fullName}, ${val.age}, ${val.height} </li>`;
  if(idx == persons.length - 1) {
    tag += '</ul>';
  }
};
let over170 = function(val, idx) {
  
  if(idx == 0) {
    tag += '<ul>';  
  }
  if(val.height >= 170) 
  tag += `<li> ${val.fullName}, ${val.age}, ${val.height} </li>`;
  if(val.height == persons.length - 1) {
    tag += '</ul>';
  }
}

persons.forEach(over170);
console.log(tag);
document.write(tag);