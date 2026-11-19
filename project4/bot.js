// this builds off of class-18-demo
// we are adding the fetch request in our interval function

require('dotenv').config()

const m = require('masto')

const masto = m.createRestAPIClient({
    url: 'https://networked-media.itp.io/',
    accessToken: process.env.TOKEN,
});

async function makeStatus(text) {
    const status = await masto.v1.statuses.create({
        status: text,
        // TODO: change visability to public when project ready to run
        visibility: 'public',
    });
}

// Reference: Claude Sonnet 5.5 on time limit writing
function isSleepTime(){
    const hour = new Date().getHours();
    if(hour>=8 && hour<12){
        return true;
    }else{
        return false;
    }
}

setInterval(async () => {
     // Reference: Claude Sonnet 5.5 on time limit writing, continued
    if(isSleepTime()) return; 

    // TODO: ADD API REQUEST
    // change localhost to your partner's droplet IP (their server must be running)
    // if needed, change the port (6003) to match your partner's app.listen in *their* server.js
    let url = 'http://206.81.0.79:6003/get-data';
    
    let response = await fetch(url)
    let json = await response.json()
    // what do you want to do with your partner's data?
    //     it will use the json variable for any manipulation
    console.log(json)
    // TODO: SELECT ITEM FROM JSON AND MANIPULATE IT FOR YOUR BOT
    //    the json is an array, so you will need to select a specific item from it 
    //    and whatever property you would like to access. 
    //    likely, you will need to test your partner's data and see how they format it
    // POST is the text

    // Reference: Class18 demo
    // Random name generation
    let name = ['Ra','Anubis','Horus','Isis','Osiris','Thoth','Bastet','Sobek','Hathor','Set'];
    let rand = Math.floor(Math.random()*name.length);

    // Randome body part generation
    let part = ['head','body','leg'];
    let randB= Math.floor(Math.random()*part.length);

    let post = name[rand] +" looks around anxiously and finally asks Sekhem: where is my "+ part[randB] +"@Tommy"
    // json[0].part 
    
    // make our status
    makeStatus(post);

    // TODO: CHANGE 5000ms TO YOUR SPECIFIC INTERVAL
}, 13*60*1000);

// when ready to upload the bot, remember to upload the .env file and the updated bot.js file
