// Define a function sum that takes three numbers as parameters and returns their sum. Use
// the spread operator to call this function with an array of numbers.

function sum(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

console.log(sum(1, 2, 3));