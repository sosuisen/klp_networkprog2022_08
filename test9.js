const resource = '/todos/3';
const re = /^\/todos\/(\d+)$/;
const found = resource.match(re);
const id = parseInt(found[1]);
console.log(id); // 3

const resource2 = '/todos/hello'; // 文字なので \dにマッチしない
const found2 = resource2.match(re);
console.log(found2); // null 

const resource3 = '/todos/3/title'; // 数字で終わってないため $とマッチしない
const found3 = resource3.match(re);
console.log(found3); // null        
