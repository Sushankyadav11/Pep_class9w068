// Create a function mergeArrays that takes two arrays as parameters and returns a new
// array that combines both arrays using the spread operator.

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mG = mergeArrays(array1, array2);
console.log(mG);
