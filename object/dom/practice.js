//dom/practice.js

document.addEventListener('DOMContentLoaded', function() {
let btn = document.querySelector('button');
btn.addEventListener('click', function () {
  //입력값1, 입력값2
  let name = document.getElementById('userName').value; //사용자가 입력한 이름값
  let age = document.getElementById('userAge').value; //사용자가 입력한 나이값

  if(!name) {
    alert('이름을 입력하세요');
    return;
  }
  if(!age){
    alert('나이를 입력하세요');
    return;
  }

  let span1 = document.createElement('span'); //<span>${name}</span>생성
  span1.innerHTML = name; //let name값을 span1에 저장
  let span2 = document.createElement('span');
  span2.innerHTML = age; //let age값을 span2에 저장
  let div1 = document.createElement('div'); //<div></div>
  div1.appendChild(span1); //<div><span></span></div>
  div1.appendChild(span2); //<div><span></span><span></span></div>

  document.getElementById('show').appendChild(div1); //화면출력
  });
})
