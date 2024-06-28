//NodeJS is event driven architecture so that when some event fires so we have to take respective action according to it for example some request has occured as event then we have to take action of giving it a reply
import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterIsFull', () => {
  console.log('Go close the tap else water would overflow!');
  setTimeout(() => {
    console.log('Go close the tap else water would overflow! Now!!');  //It'll run after three seconds
  }, 3000);
});   //Also remember when we run .js code remove line of "type": "module" from package.json else it would occur error since we won't be able to use 'require'
//We won't be able to use it unless event is fired and here we just defined action which should be taken for particular event

console.log("The script is running")
myEmitter.emit('WaterIsFull'); //event is fired
console.log("The script is still running")
//Till event doesn't occur else statements would be running both before and after statements
//timeout runs when all lines of code has runned (verify it once)
