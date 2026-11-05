
let express = require('express')
let nedb = require('@seald-io/nedb')

// set up variables to use 
let app = express();

// database setup
// accepts an object: 1) file name 
let database = new nedb({
    filename:"mydatabase.db", 
    autoload: true
});

// set up the server, public folder & get content
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

// GET REQUESTS
app.get('/', (request, response)=>{
    response.send('server is working!')
})

// add data to database file
app.post('/add-data', (request, response)=>{
    console.log(request.body)
    // let dataToBeAdded = request.body
    let dataToBeAdded = {
        message: request.body.newMessage,
        timestamp: Date.now()
    }

    //add to database
    database.insert(dataToBeAdded,(error, newData)=>{
        if(error){
            console.log(error)
            response.send('error, data was not added!')
        }else{
            console.log(newData)
            response.send('data added successfully')
        }
    })
})

// URL sending to groupmate
app.get('/get-data',(request, response)=>{
    //query is how we ask for the data from db
    //empty query object will give everything
    let query={}
    database.find(query,(error, retrievedData)=>{
        // small scale, skips if/else error statement
        console.log(retrievedData)
        // send data back as an json obejct
        response.json({retrievedData})
    })
})

// LISTEN
app.listen(6001,()=>{
    console.log('server is running on http://localhost:6001/')
})