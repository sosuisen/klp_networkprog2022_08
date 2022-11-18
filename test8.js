const found = 'angel'.match(/(e?le?)/); 
console.log(found[1]); // el

const found2 = 'angle'.match(/(an)g(e?le?)/);
console.log(found2[1]); // an
console.log(found2[2]); // le
