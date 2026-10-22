Way opening the terminal: 
1. Navigate to Finder/ File Explorer
2. `pwd`
3. `npm init -y`
4.`npm install express nunjucks`

Ways used to run server.js file
1. `node server.js` --> requires a restart every time we make changes to the file
2. `node --watch server.js` --> watchers our server for changes and will automatically restart the server
3. `node --watch --watch-path=views server.js` --> this watches both our server.js file and all of our .njk files in our viwes folder