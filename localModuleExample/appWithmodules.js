// Node.js uses CommonJs, therefore every file is module(by default)
const inputs = require('./inputs');
const sampleFunction = require('./funcUtils');
const modInputs = require('./modInput');

//console.log(inputs);

console.log(sampleFunction(inputs.input1));
console.log(sampleFunction(inputs.input2));
console.log(sampleFunction(modInputs.arrayValue[0]));
console.log(sampleFunction(modInputs.arrayValue[1]));