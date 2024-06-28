const fs = require('fs');

// fs.readFile('ABC.txt','utf-8',(err, data)=>{
//     console.log(err,data)
// })
//file is available here

//else it would show it if not available as error code and not defined like
// fs.readFile('ABCD.txt','utf-8',(err, data)=>{
//     console.log(err,data)
// })

const a=fs.readFileSync('ABC.txt') 
console.log(a) //shows buffer (to see file)
console.log(a.toString()) //to see content of file

// fs.writeFile('ABC.txt',"This is a data", ()=>{
//     console.log("Written to the file")
// });

// b=fs.writeFileSync('ABC.txt',"This is a data")
// console.log(b) //it shows data from ABC.txt because it is defined well here unlike read statement above

console.log("Finished reading file")

//as nodejs is non blocking I/O system hence it doesn't block to one process and moves forward by avoiding delay Hence as readFile
//function takes time so console. log function ran first after that as soon as it's function got completed this line ran after it 

