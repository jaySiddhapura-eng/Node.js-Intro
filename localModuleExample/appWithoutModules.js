// this app implements functionality without modularity in mind
const input1 = 'abc';
const input2 = 'def';

const sampleFunction = (input) => {
    let output = input.toUpperCase();
    return output;
}

console.log(sampleFunction(input1));
console.log(sampleFunction(input2));
console.log(sampleFunction('ghi'));