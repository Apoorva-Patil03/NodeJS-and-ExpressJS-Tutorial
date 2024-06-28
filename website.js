const { Console } = require('console');
const fs = require('fs');
const http = require('http');
// const port = process.env.port; //we would accept port that we got for process
const port = process.env.PORT || 3000 ; //we can define environment variable
const server= http.createServer((req,res)=>{
    //console.log(req)
    console.log(req.url)//we can add url in browser and access it's url by this
    res.statusCode=200 //u know codes like 404:not found, 500:server error ,etc. we can get that here 200:okay
    res.setHeader('Content-Type', 'text/html') //so we can represent our request in form of html format
    if(req.url=='/'){
        res.statusCode=200;
        res.end('<h1>This is Appu </h1><p>This is the way to rock the world!!</p>'); 
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1>This is Appu </h1><p>This is the rocking world!!</p>'); 
    }
    else if(req.url=='/hello'){
        res.statusCode=200;
        const data = fs.readFileSync('Node.html'); //read html file
        // res.end('<h1>This is Appu </h1><p>This is the right way !!</p>'); 
        res.end(data.toString());
    }
    else{
        res.appu(); //server will crash as function doesn't exist
        res.statusCode=404;
        res.end('<h1>This is Appu </h1><p>This is the way to rock the world!!</p>'); 
    }
}) 
//res.end is reply message for when status code is 200
//callback

server.listen(port ,()=>{
    console.log(`server is listening to port ${port}`) //back quote use so we can write ${port} and write with correct else error code will generate
}) //if port on 2nd line isn't capital then it would called as undefined
//to run this run on browser as localhost:3000 as we haven't defined our environment or(else) case would run
//And don't forget to inspect code on browser:))

//even we install nodemon and run website.js in terminal but site is crashed so it shows error 
//we use nodemon for if app or website crashed it restores it very soon

//in this 2 complications about html file doesn't exist and nodemon working odd(please do verify)