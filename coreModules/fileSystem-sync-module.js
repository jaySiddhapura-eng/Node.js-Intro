
const fs = require('fs');

const first = fs.readFileSync('./sampleContentFolder/file1.txt', 'utf-8');
console.log(first);

const second = fs.readFileSync('./sampleContentFolder/file2.txt', 'utf-8');
console.log(second);

// if the result file is not present in the folder then node will create one before perform the write
fs.writeFileSync(
    './sampleContentFolder/result.txt',
    `here is the result ${first}, ${second}`,
    {flag: 'a'} // append the text everytime this write happen // if this flag is not given node will overwrite the content of the file
);