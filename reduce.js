//The reduce is used to apply a function to each element in the array to reduce the array to a single value.

//Declare an array of numbers
var array = [1,2,3,4,5];

//function to calculate and return the product

function productArray(totalResult,currValue){
          return totalResult*currValue;
}

//Declaring an answer variable to store the final result
//The reduce function callback is the productArray method
let answer = array.reduce(productArray);
console.log("Answer with no initial value")
console.log(answer);

console.log("Given an initial value of 2. The answer should be doubled")
let answer2 = array.reduce(productArray,2);
console.log(answer2);