const os = require('os');

// Info about current user

const user = os.userInfo();
console.log(user);

// uptime method

console.log(`The system Uptime is ${os.uptime()} Seconds`);


// INFO
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);