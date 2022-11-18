const rex = /abc/;

console.log(rex.test('node')); // true
console.log(rex.test('code')); // true
console.log(rex.test('period')); // true
console.log(rex.test('void')); // false
