//array/basic.js

//배열선언 : [], new Array();
let arr = [1, 2]; //배열 선언
let newAry = [3, 4, 5, 6];

//배열추가
arr.push(3); //push:마지막 위치에 추가
arr.unshift(0); //unshift:첫번째 위치에 추가

//배열제거
arr.pop(); //pop: 마지막 위치 제거
arr.shift(); //shift : 첫번째 위치 제거

//forEach를 이용하여 새로운 배열 추가
newAry.forEach(ele => {
  //arr.push(ele);
  arr.unshift(ele); //3부터 역순으로 추가가 됨
});

arr.pop(); //값을 주고 제거하는 게 불가
arr.pop();
arr.shift(); //5, 4, 3

//splice(위치, 크기(범위), 대체값) : 추가, 수정, 삭제
// arr.splice(1, 2, 8, 9); //5, 4, 3의 값 중 [1]번째 배열인 4부터 2개의 숫자를 8, 9로 변환
// arr.splice(1, 0, 8, 9); //5와 4 사이에 8, 9를 삽입
// arr.splice(1, 2); 4와 3을 지움

newAry.forEach(ele => {
  arr.splice(1, 0, ele); //현재 5,4,3 -> 5, ele(6, 5, 4, 3), 4, 3 
  //범위를 1로 줄 경우 6이 4의 자리에 들어감
});

console.log(arr.toString());

let names = [];
let anonym = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nemo, natus ut consectetur assumenda esse numquam atque dicta rerum tempore ratione iusto placeat omnis culpa ipsum officiis aut quibusdam?';
anonym.split(' ').forEach(el => {
  names.push(el);
});


console.log(names.toString()); //배열요소들을 ,로 구분함

//forEach(): 반환값 없음
//map(): 각요소에 해당되는 값을 mapping작업을 하여 다른 형태로 반환, 새로운 배열 생성
//filter(): 리턴 조건을 만족하는 값만 반환, 새로운 배열 생성

let result = names.map(function(ele) {
  return ele.toUpperCase();
}); 

result = result.filter(function(ele) {
  return ele.length >= 10;
});

result = names.map(elem => elem.toUpperCase()).filter(elem => elem.length >= 10); //chain rules
//위의 2회 기능메소드 작성보다 간결함
console.log(result);