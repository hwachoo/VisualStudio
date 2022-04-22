//object/basic.js

const member = {
  memberId: 'user1',
  memberName: 'Hong',
  getMemberName: function() {//속성에 기능구현 가능
    return `회원의 이름: ${this.memberName}`;
  },
  setmemberName: function(name) {
    this.memberName = name;
  }
}

console.log(member.memberId);
member.setmemberName('Hwang');
console.log(member.getMemberName());

member.memberAge = 20; //메소드 내에서만 속성부여가 가능한 것은 아님
delete member.memberAge;
member['memberPoint'] =1000;
member.grade = function () {
  if(this.memberPoint > 500) { //this = member가 가지고 있는 object를 지칭
    return 'gold';
  }else if(this.memberPoint > 1000) {
    return 'platinum';
  }
}
console.log(member.grade());
//새로운 멤버 추가하고 싶을 때 다시 메소드를 만들어야 하는 단점이 있음

//클래스 or construct => object 생성 함수
class Student {
  constructor(sno, sname) {
    this.sno = sno;
    this.sname = sname;
  }
  set mathScore(score) { 
    this._mathScore = score; // object에는 속성명의 앞에 _(언더바)를 넣어야 됨
    //생성자에 선언되지 않은 속성 추가
  }
  get mathScore(){
    return this._mathScore; //_mathScore 속성값을 읽어옴
  }
  getSno() {
    return this.sno;
  }
  setSno(sno){
    this.sno = sno;
  }
}
const s1 = new Student('1111', 'Hong');
const s2 = new Student('2222', 'Hwang');
console.log(s1.getSno());
s1.engScore = 80;
s1.mathScore = 90; //mathScore setter 호출
console.log(s1.engScore);
console.log(s1.mathScore); //mathScore getter 호출
//생성한 메소드의 재활용가능

function Person(ssn, sname) {
  this.ssn = ssn;
  this.sname = sname;
  this.getInfo = function() {
    return `주민번호 ${this.ssn}, 이름${this.sname}`;    
  }
}
const p1 = new Person('951111-1111111', 'Hong');
const p2 = new Person('972222-2222222', 'Hwang');
const p3 = new Person('111111-3333333', 'Park');
p1.getInfo();
console.log(p1.getInfo());

