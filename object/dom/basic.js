//dom/basic.js

// DOM : 생성, 속성변경, 삭제, 부모-자식 관계 설정
//addEventListener('이벤트이름', '실행할 코드(이벤트 핸들러)');
//DOMContentLoaded - DOMContent가 전부 로딩 되었을 때

//console.log('1');

document.addEventListener('DOMContentLoaded', function() { //dom로딩됐을 때 기능 실행

  //console.log('2');//DOMContent가 전부 로딩됐을 때 실행되기 때문에 3번보다 나중에 출력됨
  let h3Tag = document.getElementsByTagName('h3');
  console.log(h3Tag);
  h3Tag[1].innerHTML = 'Git Test'; //[1]의 인덱스값을 가진 h3의 값을 변경함

  document.getElementById('first'); //first라는 id값을 가진 요소를 가져옴
  //HTMLCollection 타입으로 반환
  console.log(first);
  first.innerHTML = 'Git Changed';

  let second = document.getElementsByClassName('first'); //classname이 first인 값의 내용을 변경
  second[0].innerHTML = '사과';

  //CSS의 선택자 이용 h3 > div
  let list = document.querySelectorAll('ul > li'); //조건만족하는 값 전부 반환(All)
  console.log(list);
  list[1].style.backgroundColor = 'yellow';

  //DOM 생성
  let newList = document.createElement('li'); //<li>Mango</li>
  newList.innerHTML = 'Mango';

  console.log(newList);

  //ul 하위요소 <li>Mango</li>
  let ulTag = document.querySelector('ul'); //ul태그들 중 첫번째 태그
  ulTag.appendChild(newList);

}); //document에 event 등록 

//console.log('3');


