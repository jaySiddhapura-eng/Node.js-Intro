const os = require('os');

console.log(os.cpus());
console.log(os.userInfo());
console.log('uptime : ' + os.uptime() + ' seconds');
console.log('version : ' + os.version());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);




