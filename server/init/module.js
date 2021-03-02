(function() {

    dayjs = module.exports = require("dayjs");
    log = module.exports = console.log.bind(console);

    URL = module.exports = require('url').URL;

    fetch = module.exports = require('node-fetch');
    createApi = module.exports = require('unsplash-js').createApi;

    unsplash = module.exports = createApi({
        accessKey: process.env.UNSPLASH_ACCESS_KEY,
        fetch: fetch,
    });
    Heroku = module.exports = require('heroku-client')
    heroku = module.exports = new Heroku({ token: process.env.HEROKU_API_TOKEN })

    gzippo = module.exports = require('gzippo');
    compression = module.exports = require('compression')

    ejs = module.exports = require('ejs');
    express = module.exports = require("express");
    app = module.exports = require('express')();
    http = module.exports = require('http').Server(app);
    io = module.exports = require('socket.io')(http);
    cors = module.exports = require('cors');
    cluster = module.exports = require('cluster');
    mongoose = module.exports = require("mongoose");
    Schema = module.exports = mongoose.Schema;
    ObjectId = module.exports = mongoose.ObjectId;
    log('ObjectId;');
    log(ObjectId);
    multer = module.exports = require('multer');
    bodyParser = module.exports = require('body-parser');

    fs = module.exports = require('fs');
    bcrypt = module.exports = require("bcryptjs");
    jwt = module.exports = require('jwt-simple');
    cors = module.exports = require('cors');
    moment = module.exports = require('moment');
    saltRounds = module.exports = 20;
    request = module.exports = require('request');
    request.gzip = true;

    // Nexmo Module For Phore Number Authentication
    // Nexmo = module.exports = require('nexmo');
    // nexmo = module.exports = new Nexmo({
    //     apiKey: 'b2c2c227',
    //     apiSecret: 'jteZ5qYjeLITiaWd'
    // });

    cloudinary = module.exports = require('cloudinary');
    //  Configure Cloudinary :
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
    });


    //Linkedin


    qs = module.exports = require('querystring');
    helmet = module.exports = require('helmet');
    cloudinaryStorage = module.exports = require('multer-storage-cloudinary');
    dateFormat = module.exports = require('dateformat');
    // detect Basic Overall Location on IP Address
    expressip = module.exports = require('express-ip');
    // mapbox 
    MapboxClient = module.exports = require('mapbox');
    mapbox = module.exports = new MapboxClient(process.env.MAPBOX_CLIENTID);
    //  Mapbox dedicated geocoding
    mapboxGeocoding = module.exports = require('mapbox-geocoding');
    mapboxGeocoding.setAccessToken(process.env.MAPBOX_CLIENTID);
    // NodeMailer
    nodemailer = module.exports = require("nodemailer");


    cachedRequest = require('cached-request')(request);
    cacheDirectory = "/tmp/cache";
    cachedRequest.setCacheDirectory(cacheDirectory);
    cachedRequest.setValue('ttl', 300000);
    path = module.exports = require('path');

    wc = module.exports = require('which-country');
    getCountryISO2 = module.exports = require("country-iso-3-to-2");
    ms = module.exports = require('ms');

    decodeURL = module.exports = require('urldecode')


})();