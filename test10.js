const array = [{ id: 1 } , { id: 2 }];
const obj = array.find(elm => {
  if (elm.id === 2) return true;
})
console.log(obj); // { id: 2 }
