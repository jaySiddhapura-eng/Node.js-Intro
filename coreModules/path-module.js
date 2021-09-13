

const path = require('path');
//console.log(path);

console.log('path separator : ' + path.sep);

const filePath = path.join('/localModuleExample', 'global.js');
console.log(filePath);
// above method will correct the path with correct separator

const base = path.basename(filePath);
console.log(base);
// above method will return the base file of the path which is global.js

const absolute = path.resolve(__dirname, filePath);
console.log(absolute);
//above method will give the absolute path of the given file path