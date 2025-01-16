// Create a function createMessage that takes a default message and an indefinite
// number of names. The function should return an array of personalized messages for
// each name.

function createMessage(defaultMessage, ...names) {
  return names.map(name => `${defaultMessage} ${name}`);
}

console.log(createMessage('Hello,', 'John', 'Alice', 'Bob')); 
