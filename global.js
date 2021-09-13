// // __dirname : will return the current directory
// console.log(__dirname);

// // __filename : will return the directory with the current file
// console.log(__filename);

// // require : will return the function require
// console.warn(require);

// // module : info about current module
// console.warn(module);

// //process : returns the info about env where program is being executed
// console.log(process);

setInterval(() => {
    console.warn('interval triggered');
}, 1000);

setTimeout(() => {
    console.warn('time out after 5000 ms');
}, 5000);