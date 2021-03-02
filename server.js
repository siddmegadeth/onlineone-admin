(function() {
	baseDirectory = module.exports = __dirname;
	require('dotenv').config()
    require("./server/app");
    log('Base Directory PATH');
    log(baseDirectory);
})()

//var productionLink = 'https://gethike-app.herokuapp.com';