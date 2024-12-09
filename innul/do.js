let code = 'x + y';
code = 'return(' + code + ');';

// Create a new function using the dynamically generated code
const dynamicFunction = new Function('x', 'y', code);

// Invoke the dynamic function with arguments
const result = dynamicFunction(2, 3);

console.log(result); // Output: 5
