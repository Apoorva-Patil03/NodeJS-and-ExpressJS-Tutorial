const os = require('os'); //built in module no need to use "./" just mention name
//access any function from module 'os'
console.log(os.freemem()); //showing free memory in laptop
console.log(os.homedir()); //home directory  
console.log(os.hostname()); //host name
console.log(os.platform()); // platform
console.log(os.release()); // Release version of OS
console.log(os.type()); //type of OS
//we can try many function by seeing them from nodeJS documentation