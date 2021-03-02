(function() {

    app.get('/get/local/notification', function(req, resp) {
        log('/get/local/notification');
        var profile = req.body.profile || req.query.profile;
        var location = req.body.location || req.query.location;
        log("Received Meta :");
        geoPoint = JSON.parse(location);

        log(geoPoint);
        var radian = kmToRadian(50);
        BoardContentModel.find({

            location: {
                $geoWithin: {
                    $centerSphere: [
                        geoPoint.coordinates,
                        radian
                    ]
                }
            }
        }, function(geoErr, georesults) {
            if (geoErr) {
                resp.send({ error: geoErr, message: 'Some Error Occured Finding Notification Documents Near You', status: false });
            }

            if (georesults) {
                log("Found georesults for location search :");
                log(georesults);
                resp.send({ message: "Notfication Update.Found Near You", status: true, isResultsFound: true, count: georesults.length });

            } else {
                log("Results Not Found  :");
                resp.send({ message: "No Notification Results Found Near You", status: true, isResultsFound: false });
            }
        });
    });

})();