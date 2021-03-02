(function() {

    app.get('/get/places', function(req, resp) {
        log('/get/places');
        var places = req.body.places || req.query.places;
        log(places);

        mapboxGeocoding.geocode("mapbox.places", places, function(err, geoData) {
            console.log(geoData);
            if (err) {
                console.log("Error Occured :");
                log(err);
                resp.send({ status: false, message: 'Some Error Occured Fetching Places', error: err });
            }
            resp.send({ status: true, message: 'Retrieved Places', places: geoData });

        });

    });


    // To be Used later
    app.get('/get/reverse/geocode/save', function(req, resp) {
        log('/get/reverse/geocode');
        var position = req.query.position || req.body.position || req.param["position"];
        var email = req.query.email || req.body.email || req.param["email"];

        log("Received Position : ");
        position = JSON.parse(position);
        log(position);

        log(position.lat, position.lng);
        log(parseFloat(position.lat), parseFloat(position.lng));
        mapboxGeocoding.reverseGeocode("mapbox.places", parseFloat(position.lng), parseFloat(position.lat), function(err, mapboxResp) {
            log("Fetched Data From Mapbox");
            //log(mapboxResp);
            if (err) {
                resp.send({ isGeocoded: false, message: 'Cannot Geocode Issue', message: err });
            }
            resp.send({ isGeocoded: true, message: 'Reverse Geocoded Done', mapbox_location: mapboxResp });
        });
    });




    // Reverse Geolocation Lat/Lng 
    app.get('/get/reverse/geocode', function(req, resp) {
        log('/get/reverse/geocode');
        var position = req.query.position || req.body.position || req.param["position"];
        log("Received Position : ");
        position = JSON.parse(position);
        log(position);

        location = {
            type: 'Point',
            coordinates: [position.longitude, position.latitude]
        };

        log(position.lat, position.lng);
        log(parseFloat(position.lat), parseFloat(position.lng));
        mapboxGeocoding.reverseGeocode("mapbox.places", parseFloat(position.lng), parseFloat(position.lat), function(err, mapboxResp) {
            log("Fetched Data From Mapbox");
            //log(mapboxResp);
            if (err) {
                log('Error Occured :');
                log(err);
                resp.send({ isGeocoded: false, message: 'Cannot Geocode Issue', message: err });
            }
            log('Response From Mapbox :');
            log(mapboxResp);
            resp.send({ isGeocoded: true, message: 'Reverse Geocoded Done', mapbox_location: mapboxResp });
        });
    });

    // Geocode  text to Lat/Lng
    app.get('/get/geocode', function(req, resp) {
        log('/get/geocode');
        var place_name = req.query.place_name || req.body.place_name || req.param["place_name"];
        log("Received Position Text : ");
        log(place_name);
        mapboxGeocoding.geocode("mapbox.places", place_name, function(err, mapboxResp) {
            log("Fetched Data From Mapbox");
            log(data);
            log(mapboxResp);
            resp.send({ isGeocoded: true, message: 'Geocoded Detected Position', mapbox_location: mapboxResp });
        });
    });

    // Reverse Geolocation Lat/Lng  based on IP Location
    app.get('/get/ip/location', function(req, resp) {
        log('/get/ip/location');
        log(req.ipinfo);
        var detectedIP = req.ipInfo;
        if (detectedIP.ip == '::1') {
            log("Value Cannot Be Detected For Localhost");

            resp.send({ isIPDetected: false, message: detectedIP.error });

        } else {
            mapboxGeocoding.reverseGeocode("mapbox.places", detectedIP.ll[1], detectedIP.ll[0], function(err, data, mapboxResp) {
                log("Fetched Data From mapbox");
                log(data);
                log(mapboxResp);
                resp.send({ isIPDetected: true, message: 'Detected Location', location: detectedIP, mapbox_location: mapboxResp, mapbox_data: data });

            });

        }
    });


    app.get('/get/country/code', function(req, resp) {
        log('/get/country/code');
        var lat = req.query.lat || req.body.lat || req.param["lat"];
        var lng = req.query.lng || req.body.lng || req.param["lng"];
        log("Received Lat/Lng");
        var probe = [];
        probe.push(lng);
        probe.push(lat);
        var iso = wc(probe);
        log("Before Conversion : " + iso); // RUS
        var iso2Converted = getCountryISO2(iso);
        log("After Conversion : " + iso2Converted);

        resp.send({ country: iso, iso2: iso2Converted, message: 'Country Code', status: true });
    });


})()