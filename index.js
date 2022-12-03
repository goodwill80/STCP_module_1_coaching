/*
    Task 1. Outer function calculate totalPrice, inner function return a GST payable price.

    Steps:
    - Create an outer function that takes the array "priceList" as an argument.
    - In the scope of the outer function, sum all the value in array "priceList" 
    and store the value in variable "totalPrice".
    - Return an inner function that multiply "totalPrice" with GST 7% and store 
    the value in variable "payablePrice".
    - The variable "payablePrice" should be returned in the inner function.
    - Make appropriate calls to the outer and inner function and console log
    the value of "payablePrice".
    
*/

const priceList = [10.5, 9.9, 8.9, 4.5];

// Add code here
const totalInArr = (arr) => {
  const totalPrice = arr.reduce((a, b) => a + b, 0);
  return (tax) => totalPrice + totalPrice * tax;
};

const totalGSTPayable = totalInArr(priceList)(0.07);
console.log(totalGSTPayable);

/*
    Task 2. Manipulate the "queue" array.
*/
const createQueue = (fn) => {
  const queue = [1, 2, 3, 4, 5];
  return fn(queue);
};

// // Add code here - define the function that adds "start" and "last" to a given array
const addInstructions = (arr) => {
  const arritem = arr.slice();
  arritem.push('last');
  arritem.unshift('start');
  return arritem;
};

const result = createQueue(addInstructions); // Add code here - pass a reference of a function as an argument
console.log(result); // Expected output: ["start", 1, 2, 3, 4, "last"];
