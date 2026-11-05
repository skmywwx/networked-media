// make a request to the /get-data url
// this js will go inside of the makeStatus function in the bot 
// groupmate will make a request to http://your-ip-address:6001/get-data
// retrieving data using API
// when testing personally, use http://localhost:6001/get-data

async function getData(){
    let url = 'http://localhost:6001/get-data'

    let response= await fetch(url)
    // print out response to browser
    let json = await response.json()
    // what do you want to do with the your partner's data
    // it will use the json variable for any manipulation 
    console.log(json)
}

// call getData() sinde of the makeStatus()function
getData()
