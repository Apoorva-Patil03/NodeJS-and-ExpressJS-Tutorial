 //here we used common JS modules and by this we can 
//import functions from one JS file to another

//Also keep extension as .js only and not .mjs because if we use .mjs then it would mean that we are calling ES(ecmascript) module while we not
//hence it would cause error so also we can't use 'require' here

// const simple2=require("./modulesecond.mjs");
// import {simple} from "./modulesecond.mjs" //here we get error for .mjs but if we write type as module in package.json then we won't get error and we would be able to use 'require'
// simple()
//-----1

import {simple, simple2} from "./modulesecond.mjs" //here we get error for .mjs but if we write type as module in package.json then we won't get error and we would be able to use 'require'
import * as a2 from "./modulesecond.mjs"
console.log(a2); //(don't know why it runs with and without semi-colon both times)
console.log(a2.simple())
simple() //here curly brackets are also important
// import {simple2 as simple} from "./modulesecond.mjs"
// simple2()  //error as simple already defined
//-----2

// import {simple2} from "./modulesecond.mjs" //here we get error for .mjs but if we write type as module in package.json then we won't get error and we would be able to use 'require'
// simple() //here curly brackets are also important
// import {simple2 as simple} from "./modulesecond.mjs"
// simple() //double print only when --1 is not present 
// //-----3

// import {simple2} from "./modulesecond.mjs" //here we get error for .mjs but if we write type as module in package.json then we won't get error and we would be able to use 'require'
// simple2()
// //-----4

