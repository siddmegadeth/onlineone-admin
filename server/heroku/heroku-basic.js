(function() {

    app.get('/get/heroku/app/all', function(req, resp) {
        log('/get/heroku/apps/');
        heroku.get('/apps').then(herokuResp => {
            // do something with apps
            log(herokuResp);
            resp.json(herokuResp);
        })
    });

    app.get('/get/heroku/app', function(req, resp) {
        log('/get/heroku/app/');
        var appname = req.params.appname || req.body.appname || req.query.appname;
        log(appname);
        var url = 'https://api.heroku.com/apps/' + appname;
        log(url);
        request(url, {
            json: true,
            headers: {
                "content-length": "159",
                "content-type": "application/json; charset=utf-8"
            }
        }, function(error, response, body) {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            resp.json(response);
        });

    });

})()