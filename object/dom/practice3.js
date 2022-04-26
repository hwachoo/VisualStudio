//dom/practice3.js

let data = [{id: 101, name:'홍길동', age:20},
{id: 102, name:'김길동', age:22},
{id: 103, name:'박길동', age:25}
];

document.addEventListener('DOMContentLoaded',callbackFnc);

function callbackFnc () {
  console.log(window);
  

  let table, thead, tbody;
  //table생성
  table = document.createElement('table');
  table.setAttribute('border', 1);

  thead = makeHead();
  table.appendChild(thead);
  tbody = makeBody(data);
  table.appendChild(tbody);
  //show
  document.getElementById('show').appendChild(table);

  //추가버튼 이벤트
  let btn = document.querySelector('button');
  btn.addEventListener('click', function() { 
    let name = document.getElementById('userName').value;
    let age = document.getElementById('userAge').value;

    let val = {}
    val.name = name;
    val.age = age;
    val.id = 110;

    document.querySelector('table>tbody').appendChild(makeTr(val));  
  })

  // let newObj = {id: 105, name:'김민수', age:23};
  // document.querySelector('table>tbody').appendChild(makeTr(newObj));
}

function makeTr(val) { //tr생성

  let fields = ['name', 'age'];

  tr = document.createElement('tr');
  tr.setAttribute('id', val.id);

  //name, age 필드의 개수만큼 td 생성
  fields.forEach(function(field) {
  td = document.createElement('td');
  text = document.createTextNode(val[field] + `${field == "age"?"살":""}`); //val의 값을 일일이 적지 않고 반복해서 가져옴
  td.appendChild(text);
  tr.appendChild(td);
  });


  let btn = document.createElement('button'); //<button>삭제</botton>
  btn.innerHTML = '삭제';
  btn.addEventListener('click', function(event) {
    //btn.addEventListener('click', deleteCallBack()) 
    console.log(event);
    console.log(event.target.parentElement.parentElement.remove());
    //target = 삭제 '버튼', parentElement = td parentmentElement = tr
    //event.target = 버튼 태그
  });
  td = document.createElement('td');
  td.appendChild(btn);
  tr.appendChild(td);

  return tr;
}

// function dleleteCallBack() {
//   console.log(this);
//   this.parentElement.parentElement.remove();
// }

function makeBody(objAry) {
  let tbody;
//tbody생성
tbody = document.createElement('tbody');
// tbody.appendChild(tr);
// tbody.appendChild(td);

//라인
objAry.forEach(function (val) {

  tbody.appendChild(makeTr(val));
});
return tbody;
}

function makeHead() {
  let thead, tr, td, text;
  //thead생성
  thead = document.createElement('thead');

  tr = document.createElement('tr');
  td = document.createElement('th');
  text = document.createTextNode('이름');
  td.appendChild(text); //<td>이름</td>
  tr.appendChild(td); //<tr><td>이름</td></tr>

  td = document.createElement('th');
  text = document.createTextNode('나이');
  td.appendChild(text); //<td>나이</td>
  tr.appendChild(td); //<tr><td>나이</td></tr>

  td = document.createElement('th');
  text = document.createTextNode('기능');
  td.appendChild(text); //<td>나이</td>
  tr.appendChild(td); //<tr><td>나이</td></tr>

  thead.appendChild(tr); //<thead><tr><td>이름</td></tr><tr><td>나이</td></tr></thead>
  
  return thead;
}