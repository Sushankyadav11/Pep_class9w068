// Create a chainable object using arrow functions that allows you to set a value and then add
// or multiply it by a number. For example:
// const result = chainable(5).add(3).multiply(2); // result should be 16  

const chainable = (value) => ({
    add: (num) => chainable(value + num),
    multiply: (num) => chainable(value * num),
    value: () => value,
});
const result = chainable(5).add(3).multiply(2).value();
console.log(result);
