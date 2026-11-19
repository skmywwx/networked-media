// 1. import libraries
const express = require('express');
const multer = require('multer');
const nedb = require('@seald-io/nedb');
const nunjucks = require('nunjucks')
// import the cookie-parser library
const cookieParser = require('cookie-parser')

const app = express();
// A: initializes upload to use multer library and set the destination of all of the uploaded files to public/uploads/
const upload = multer({
	dest: 'public/uploads',
});
// A: initializing database variable to use nedb library and setting up the file to store the database
const database = new nedb({
	filename: 'database.db',
	autoload: true,
});

// Q: what do each of these items set up? write above each item configuration.
// A: configures the views folder as where our .njk files live
nunjucks.configure('views', {
	autoescape: true,
	express: app,
    noCache: true // NEW! we don't have to restart the server for .njk updates :)
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 
app.set('view engine', 'njk');
app.use(cookieParser())

app.get('/', (req, res)=>{
	// local variable to track number of visits
	let totalVisits=1

	if(req.cookies.visits){
		let convertToNumber = parseInt(req.cookies.visits)
		totalVisits=convertToNumber + 1
	}

	// create cookie using response parameter
	// sends the cookie back to the client
	// res.cookie()
	// 3 parameters:
	// 1. name of the cookie, in string format
	// 2. the value of the cookie
	// 3.object of the cookie attributes that are passed into the header
	res.cookie('visits', totalVisits,{expires:new Date(Date.now()+100*365*24*60*60*1000) })
    res.render('home.njk')
	
})

app.listen(6005, ()=>{
    console.log(`http://localhost:6005`)
})