// Define a function sum that takes three numbers as parameters and returns their sum. Use
// the spread operator to call this function with an array of numbers.

function sum(...numbers){
    return numbers[0] + numbers[1] + numbers[2];
}

console.log(sum(1, 2, 3));