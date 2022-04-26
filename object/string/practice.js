//string/practice.js

let str1 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur deserunt sit iusto deleniti itaque omnis, ipsa similique dolorem fugit quisquam, eveniet optio! Nesciunt cupiditate debitis odio rerum iure! Facilis, laboriosam.';
//단어의 길이가 10개 이상인 값을 골라내서 출력 ,로 구분
//

console.log('hello'.length);

result = str1.split(' ').filter(word => word.length >= 10).join(',');


console.log(result);

