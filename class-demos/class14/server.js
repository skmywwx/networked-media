const express = require("express");
/************
 * import our templating library
 ************/
const nunjucks = require("nunjucks");

// all css and front-end js will go to public folder
const app = express();

// the public folder's name should be consistent with naming here
// DOM --> front-end
app.use(express.static("public"));
// allow us to use request.body
app.use(express.urlencoded({ extended: true }));

/************
 * add our nunjucks settings under our middleware
 * this links our express application to the templating tool
 ************/
// folder naming --> templating files
// back-end js 
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.get('/',(request, response)=>{
  // response.render accepts 2 parameters: 
  // 1. the name of the njk file
  // 2. a javascript object. the properties passed into this object are the varibales used in the .njk files
  // serverData is the name of the variable we used in the baseLayout.njk
  response.render('baseLayout.njk', {serverData: 'this is text from my server!!!'})
})

app.listen(8080,()=>{
  // to run the server:
  // 1. make sure location is in the correct folder
  // 2/ in terminal, use the starting command: node --watch server.js
  console.log('http://loclhost:8080')
})