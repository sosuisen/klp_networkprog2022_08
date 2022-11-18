console.log(/200/.test('200'));  // true
console.log(/200/.test('201'));  // false

console.log(/20\d/.test('200'));  // true
console.log(/20\d/.test('201'));  // true
console.log(/20\d/.test('404'));  // false
