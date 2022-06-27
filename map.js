//map creates a new array from calling a function for every array element. 
//it calls a function once for each element in an array.

const originalArray = [1, 2, 3, 4, 5];

const newArray = originalArray.map(function addOne(number) {
  return number + 1;
});

console.log(originalArray);
console.log(newArray); 