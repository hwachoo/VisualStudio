//practice3.js

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

const persons = [person1, person2, person3];

const newPersons = persons.map(function(val, idx){
  let newObj = {}; //newObj는 object타입임을 선언
  newObj.index = idx + 1; //object의 속성(필드)를 추가 0부터 시작되는 배열을 1부터 시작되도록 +1
  newObj.fulNam = val.fullName;
  newObj.age = val.age;
  newObj.hei = val.height;
  
  return newObj; //return이 없으면 값이 정의되지 않음(undefined)
});
console.log(newPersons);
//map 메소드 = 어떤 결과값을 실행하고 그 값을 새로운 배열에 담아줌
//2개의 값을 리턴할 수는 없음
//새로운 변수를 선언하여 그 변수에 모든 값을 지정해주면 배열을 호출하는 것과 같은 효과를 볼 수 있음

//함수정의문..

function tableList(personAry) {
  document.write('<table border = 1>');
  document.write(`<tr><th>순번</th><th>이름</th><th>나이</th><th>키</th></tr>`);  
  for(let person of personAry) { //line 생성 반복문
    document.write('<tr>');
    for(let field in person) { //칼럼(td)생성
      document.write(`<td> ${person[field]} </td>`);
    }
    document.write('</tr>');
  }
  document.write('</table>');
}
//함수실행
tableList(newPersons);