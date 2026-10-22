// all of the libraries that we are importing
// by line npm install express nunjucks
const express = require("express");
const nunjucks = require("nunjucks");

// all css and front-end js will go to public folder
// app is express server that uses express library variable 
const app = express();

// the public folder's name should be consistent with naming here
// DOM --> front-end
// app --> in reference to the server 
// app.use --> tells the server to use something, setting up the asset that happen between when the server runs & when it received a request
// static --> public (public assests need to be in this folder)
app.use(express.static('public'));
// express.urlencoded allows us to process POST requests
// if we have app.post, we need this line
// allow us to use request.body

app.use(express.urlencoded({ extended: true }));

// more settings to setup the njk files
// folder naming --> templating files
// back-end js 
// naming of the folder, like "views" is personalized, changeable, but need to remain consistent
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

// finish setups 

// store data on our server using an array variable 
let allData=[];

// response render always goes inside an app.get / app.post
app.get('/',(request, response)=>{
  // response.render accepts 2 parameters: 
  // 1. the name of the njk file
  // 2. a javascript object. the properties passed into this object are the varibales used in the .njk files
  // serverData is the name of the variable we used in the njk file in "views" folder
  // regular homepage rendering
  response.render('home.njk', {serverData: 'this is text from my server!!!'})
});

// for every new njk file, we need a new app.get
app.get('/form', (request, response)=>{
  response.render('form.njk')
});

// This will dispaly all my data on my array
// response.render, not sending not data from the server
app.get('/view-all', (request, response)=>{
  // optional second parameter in response.render: data from the server
  // the second parameter is ALWAYS an OBJECT, so it is placed within curly brace
  // data wanted to display on the clinet side, allData
  response.render('view-all.njk',{messagesArrayFromServer: allData})
});

app.post('/send-message', (request, response)=>{
  // this action will handle storing: 
  // 1. storing the data from the form on the server (in the data array)
  console.log(request.body)
  allData.push(request.body)
  // 2. redirect to where we want the data to be displayed (the rendered result, not the njk file)
  response.redirect('/view-all')
});


// Always go LAST!!!
// app.listen is now listening for requests ~ Eventlistener
app.listen(8080,()=>{
  // to run the server:
  // 1. make sure location is in the correct folder
  // 2/ in terminal, use the starting command: node --watch server.js
  console.log('http://localhost:8080')
});
