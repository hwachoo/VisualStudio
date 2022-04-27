
let data = 
[{studNo: 101, studName: '홍길동', engScore: 90, korScore: 80},
{studNo: 102, studName: '김민수', engScore: 76, korScore: 82},
{studNo: 103, studName: '박병수', engScore: 70, korScore: 91},
{studNo: 104, studName: '조수희', engScore: 88, korScore: 72}];

//초기화
let list = document.getElementById('list');
data.forEach(function(val) {
list.appendChild(makeTr(val));
});

//변경버튼
let chb = document.querySelector('input[type = "button"]'); //input 중 type이 button인 요소 선택
chb.addEventListener('click', function(e) {
  let targetTr = document.querySelectorAll('#list>tr');
  let sno = document.getElementById('sno').value;
  let eng = document.getElementById('eng').value;
  let kor = document.getElementById('kor').value;

  targetTr.forEach(function(tr) {
    if(tr.children[0].innerHTML == sno) {
      tr.children[2].innerHTML = eng;
      tr.children[3].innerHTML = kor;
    }
  });
});


function changeCallBack1(ev) {
  
  ev.preventDefault(); //기본기능 차단
  let sno = document.getElementById('sno').value;
  let snm = document.getElementById('snm').value;
  let eng = document.getElementById('eng').value;
  let kor = document.getElementById('kor').value;

  if(! (sno && snm && eng && kor)) {
    alert('필수값을 입력하세요');
    return;
  } //값이 하나라도 입력되지 않으면 alert 출력

  // if(!sno) {
  //   alert('변경할 아이디를 입력하세요')
  //   return;
  // } else if(!snm) {
  //   alert('이름을 입력하세요');
  //   return;
  // } else if(!eng) {
  //   alert('영어점수를 입력하세요');
  //   return;
  // } else if(!kor) {
  //   alert('국어점수를 입력하세요');
  //   return;
  // }

  let searchTr = document.getElementById(`s_${sno}`); //id값이 s_[sno]인 값을 찾아옴
  searchTr.children[1].innerHTML = document.getElementById('snm').value; //searchTr의 자식속성 중 [1]번째 값을 입력받아 수정
  searchTr.children[2].innerHTML = document.getElementById('eng').value;
  searchTr.children[3].innerHTML = document.getElementById('kor').value;
}


//student 한건 -> <tr><td>학번</td><td>이름</td>~~~</tr>
function makeTr(student) {
  let tr = document.createElement('tr'); //document에 tr생성
  tr.setAttribute('id', 's_' + student.studNo);
  tr.addEventListener('click', function(eve) {
    // eve.stopPropagation();
    console.log(this); //this - eve를 받는 대상
    //this.children[0].innerHTML = this(tr)의 자식요소의 [0]번쨰(studNo) 입력값
    document.getElementById('sno').value = this.children[0].innerHTML;
    //document.의 id가 sno인 요소의 value에 this 요소를 집어넣음
    document.getElementById('snm').value = this.children[1].innerHTML;
    document.getElementById('eng').value = this.children[2].innerHTML;
    document.getElementById('kor').value = this.children[3].innerHTML;

  }, true); //true - 상위 -> 하위 (default = false값)
  for(let field in student) {  //student['studNo'], student의 수만큼 반복
    let td = document.createElement('td'); //document에 td생성
    td.innerHTML = student[field]; //student의 필드값이 td에 삽입
    tr.appendChild(td); //tr의 하위요소 td
  }


//버튼:삭제
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.addEventListener('click', function (ev) {
    ev.stopPropagation(); //ev가 전파되는 것을 차단(삭제버튼 클릭 시 tr 전체가 콘솔에 출력되는 것을 방지)
    console.log(this); //this = ev를 받는 대상
    // ev.target.parentElement.parentElement.remove();
  }, false);
  let td = document.createElement('td');
  td.appendChild(btn);
  tr.appendChild(td);
  
  return tr;

};