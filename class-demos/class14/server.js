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
// allow us to  use request.body
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

app.get('/')