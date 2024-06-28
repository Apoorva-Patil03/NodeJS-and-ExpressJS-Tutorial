//(function(exports,require,module,__filename,__dirname){ //we created function where we wrap our module and ran many functions
Y={
    name:"y",
    favNum:34,
    developer:true
}
console.log(exports,require,module,__filename,__dirname) // this gives outputs about all function if ran
module.exports=Y;
//})
//when some module runs in nodeJS before that nodeJS wraps that module in function automatically known as module wrapper function 