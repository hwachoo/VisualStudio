//dom/practice1.js


document.addEventListener('DOMContentLoaded', function() { //DOMContent가 로딩되면 기능 실행
  let menus = ['아이스아메리카노', '카페라떼', '레몬에이드'];
  let ulTag = document.createElement('ul'); //ul을 document에 만들겠다 element node.


  // for(let i = 0; i < menus.length; i++) { //menus의 수만큼 반복
  // let liTag = document.createElement('li');
  // liTag.innerHTML = menus[i];
  // ulTag.appendChild(liTag);
  // }

  menus.forEach((ele, idx) => {
    ele = document.createElement('li');
    ele.innerHTML = menus[idx];
    ulTag.appendChild(ele);
    });

  let divShow = document.getElementById('show'); //div id가 show인 요소를 탐색
  divShow.appendChild(ulTag); //divshow 변수에 부합하는 div에 ul을 삽입
});
