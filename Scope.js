// localScope

// Block scope
{
  var a = 2;
}
console.log(a)

// function scope
function FindSum(a,b){
  let sum = a+b;
}
// console.log(FindSum)



// global scope
let sum = 10;
function calSum(a,b){
  sum = a+b;
  console.log(sum)
}
console.log(sum);
console.log(calSum);
