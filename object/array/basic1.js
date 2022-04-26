//array/basic1.js

//map() => 조건에 만족하는 값 새로운 배열 생성 filter() 참인 조건만 배열 생성
//reduce(); => 지정하는 값이 결과값, string, number, 배열

const numbers = [23, 4, 77, 51, 63, 34, 62, 92];

//배열요소의  ele에 대한 누적합
let result = numbers.reduce(function (accum, ele, idx, ary) {
  console.log(accum, ele, idx, ary); //0 23 0 배열요소
  accum = accum + ele; //0+23
  return accum;
}, 0);

//배열요소 *2 -> 새로운 배열
result = numbers.reduce(function(accum, ele) {
  accum.push(ele * 2); //accum의 마지막에 ele*2를 누적함
    //[46, 8, 154, 102, 126, 184]
  return accum;
}, []);

//filter : 50보다 큰 숫자만 배열로 저장
result = numbers.reduce(function(accum, ele){
  if(ele >= 50) {
    accum.push(ele);
  }
  return accum; //반환되는 값 -> 다음 순번의 초기값(accum)
}, []); 


console.log(result);

