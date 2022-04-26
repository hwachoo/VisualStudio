//array/basic2.js
let data = 
`[{"id":1,"first_name":"Ina","last_name":"Snarr","email":"isnarr0@deviantart.com","gender":"Female","ip_address":"172.196.159.13"},
{"id":2,"first_name":"Cacilia","last_name":"Dunsire","email":"cdunsire1@vimeo.com","gender":"Bigender","ip_address":"53.170.211.33"},
{"id":3,"first_name":"Shaylynn","last_name":"Meadway","email":"smeadway2@webmd.com","gender":"Female","ip_address":"153.61.252.126"},
{"id":4,"first_name":"Nicky","last_name":"Crean","email":"ncrean3@cnn.com","gender":"Female","ip_address":"61.140.216.180"},
{"id":5,"first_name":"Marybelle","last_name":"Billings","email":"mbillings4@networkadvertising.org","gender":"Female","ip_address":"247.236.197.227"},
{"id":6,"first_name":"Caryl","last_name":"Matei","email":"cmatei5@google.cn","gender":"Male","ip_address":"107.149.78.199"},
{"id":7,"first_name":"Priscilla","last_name":"Roller","email":"proller6@nytimes.com","gender":"Female","ip_address":"240.139.211.114"},
{"id":8,"first_name":"Kip","last_name":"Labarre","email":"klabarre7@example.com","gender":"Male","ip_address":"55.39.207.142"},
{"id":9,"first_name":"Emelen","last_name":"Bulch","email":"ebulch8@google.co.uk","gender":"Male","ip_address":"205.39.9.98"},
{"id":10,"first_name":"Adelaide","last_name":"Greson","email":"agreson9@boston.com","gender":"Female","ip_address":"221.200.125.79"},
{"id":11,"first_name":"Marcia","last_name":"St Leger","email":"mstlegera@1688.com","gender":"Female","ip_address":"100.234.251.98"},
{"id":12,"first_name":"Renie","last_name":"de Nore","email":"rdenoreb@earthlink.net","gender":"Female","ip_address":"205.213.171.206"},
{"id":13,"first_name":"Milissent","last_name":"Hannis","email":"mhannisc@intel.com","gender":"Bigender","ip_address":"47.244.137.69"},
{"id":14,"first_name":"Roxy","last_name":"Rack","email":"rrackd@amazon.com","gender":"Female","ip_address":"245.56.137.60"},
{"id":15,"first_name":"Natala","last_name":"Ossenna","email":"nossennae@163.com","gender":"Female","ip_address":"36.189.196.217"}]`

//find(); 조건에 만족하는 값 1개 탐색하여 반환 후 종료
let objAry = [];
objAry = JSON.parse(data);

let result = objAry.find(function(ele) {
  return ele.gender == 'Female';
});

console.log(result);