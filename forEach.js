//forEach method is used to execute a function for each individual element in an array or used to iterate over an array.
let students = ['Ashvini', 'Avi', 'Yash'];

// using forEach
students.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}

//using forEach to update the elements
let students1 = ['Ashvini', 'Avi', 'Yash'];


// using forEach
students1.forEach(myFunction);

function myFunction(item, index, arr) {

    // adding strings to the array elements
    arr[index] = 'Hello ' + item;
}

console.log(students1);


//forEach with arrow and callback
const students2 = ['Ashvini', 'Avi', 'Yash'];

students2.forEach(element => {
  console.log(element);
});