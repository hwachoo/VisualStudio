//dom/practice4.js

document.addEventListener('DOMContentLoaded', function() {
  let showDiv = document.querySelector('#show');
  showDiv.style.width = '300px';
  showDiv.style.height = '300px';
  showDiv.style.backgroundColor = 'yellow';

  let ipTag = document.getElementById('userName');
  ipTag.addEventListener('change', function() {
    let span = document.createElement('span'); //span = inline 레벨 태그
    span.style.paddingLeft = '5px';
    span.style.paddingRight = '5px';
    span.style.marginLeft = '5px';
    span.style.marginRight = '5px';

    span.style.backgroundColor = 'red';
    span.style.color = 'white';
    span.style.display = 'inline-block';
    span.innerHTML = document.querySelector('#userName').value;
    showDiv.appendChild(span);
    

    document.querySelector('#userName').value = '';
  })

  let add = document.getElementById('addBtn');

  add.addEventListener('click', function() {
    let span = document.createElement('span'); //span = inline 레벨 태그
    span.style.paddingLeft = '5px';
    span.style.paddingRight = '5px';
    span.style.marginLeft = '5px';
    span.style.marginRight = '5px';
    
    span.style.backgroundColor = 'red';
    span.style.color = 'white';
    span.style.display = 'inline-block';
    span.innerHTML = document.querySelector('#userName').value;
    showDiv.appendChild(span);
    

    document.querySelector('#userName').value = '';
  })

  

})