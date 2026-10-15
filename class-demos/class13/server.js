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

//ROUTES
//routes -- all of the URL pages we want accessible
//syntax fot GET: app.get(route, anonymous function)
// similar to document.addEventListener("eventName", (e)=>{})
app.get('/', (request, response)=>{
    //controlled by EXPRESS
    // response will contain all the information we send back from the server to the client
    // plain HTML
    console.log("received a request at / route!")
    // ALWAYS need to have a response, or else, the webpage will continuously load
    response.send('this is <em>some</em> data!!!!')
})
//routes (location that can send & receive information)
// GET /first-server, callback function
app.get('/first-server', (request, response)=>{
   //send info to the client that makes a request to /first-server
    response.send('this is my first server!')
})

// POST looks e
app.post('/form-upload',(request, response)=>{
    // console.log in server js only shows up in the terminal because it is a different console than in the browser
    // request.body retrieves the data from the form
    console.log(request.body)
    // send the client to a different route
    response.redirect('/')
})

// last, server to listen
// POST, callback function
// to start our server 
app.listen(8080,()=>{
    console.log('started (or restarted) the server')
    console.log('http://127.0.0.1:8080/')
})