// imports dotenv variables so we don't put passwords in the js file
require('dotenv').config();

// Mastodon library
const m =require('masto');

// setting up the masto variable to connect to:
// 1) url: our mastodon server
// 2) token: password to account
const masto = m.createRestAPIClient({
	url: 'https://networked-media.itp.io/',
	accessToken: process.env.TOKEN,
});

// async function to make a request to our mastodon server
async function makeStatus(text) {
    // await ensures that it creates the status before we do anything else in our code
	const status = await masto.v1.statuses.create({
		status: text,
        // change visibility to 'public' when project is ready to run
		visibility: 'private',
	});
}


// post random emoji every 5 sec
// purely backend
setInterval(() => {
    // array of emojis to select
	let emoji = ['😭', '🤩', '💖'];
    // randomly generates a number within the array list
	let rand = Math.floor(Math.random() * emoji.length);
    // selects an emoji from the array using a random index 
	let post = emoji[rand];
    // make the status with an emoji
	makeStatus(post);
}, 5000);
