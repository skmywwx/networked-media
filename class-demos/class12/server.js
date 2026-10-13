//importing the express library to use it as our server
// naming conventions usually name the variable the library name
const express = require('express');

//initialize our application using express
const app = express();

// middleware
//settings our app need to know about the server
// serves our front-endhtml that exists in the public folder

app.use(express.static("public"));

// allows us to access the body of a POST request
app.use(express.urlencoded({ extended: true }));

//routes (location that can send & receive information)
// GET /first-server, callback function
app.get('/first-server', (request, response)=>{
   //send info to the client that makes a request to /first-server
    response.send('this is my first server!')
})

// last, server to listen
// POST, callback function
// to start our server 
app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080/')
})