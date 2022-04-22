//practice.js
const numbers = [23, 45, 32, 55, 34, 72]; //배열선언

let sum = 0;

for(let i = 0; i < numbers.length; i++) { //기존 함수
  if(numbers[i] %2 ==0)
  sum += numbers[i];
}
console.log(sum);

sum = 0;
for(let num of numbers) { //확장for문 이용
  if(num %2 == 0)
  sum += num;
}
console.log(sum);


sum = 0;
numbers.forEach((par, idx, ary) => { //par 변수선언
  console.log(par, idx, ary);
    if(par % 2==0) { //par이 나눈 값이 0일 때(짝수)
      sum += par; //sum에 par값 더함
    }
  });

//함수표현식 이용
sum=0;
let  evenSum = (par, idx) => { //par 변수선언
  console.log(par, idx);
  if(par % 2==0) { //par이 나눈 값이 0일 때(짝수)
    sum += par; //sum에 par값 더함
  }
};

let oddSum = (par, idx) => {
  console.log(par, idx);
  if(par % 2==1) { 
    sum += par;
}
};


// numbers.forEach((par) => { //par 변수선언
//   if(par % 2==0) { //par이 나눈 값이 0일 때(짝수)
//     sum += par; //sum에 par값 더함
//   }
// });
numbers.forEach(evenSum);
console.log('합: ' + sum);