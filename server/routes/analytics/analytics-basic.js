(function() {

    app.get('/get/analytics/website', function(req, resp) {
        log('/get/analytics/website');
        var websiteName = req.query.websiteName || req.body.websiteName || req.params["websiteName"];

        AnalyticsModel.findOne({ businessWebsite: websiteName }, function(err, found) {
            if (err) {
                resp.send({ error: err, message: 'Some Error Occured Finding Analytics', status: false });
            }
            if (found) {
                resp.send({ message: 'Found Analytics', data: found, status: false, isAnalyticsFound: true });
            } else {
                resp.send({ message: 'Cannot Find Analytics', data: undefined, status: false, isAnalyticsFound: false });

            }

        });
    });




})()