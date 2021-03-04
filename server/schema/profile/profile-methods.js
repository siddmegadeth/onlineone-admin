(function() {

    // test Function
    //Pass Comparison Function
    ProfileSchema.methods.comparePassword = function(password, cb) {
        log("Compare Password with HASHED pass");
        log(password);
        log("HASHED");
        log(this.password);
        bcrypt.compare(password, this.password, function(err, isMatch) {
            if (err) return cb(err);

            log("Return Status:");
            log(isMatch);
            cb(null, isMatch);
        });
    };

    ProfileSchema.methods.getNearByProfile = function(location, userPreference, respCb) {

        // User Requirements Goes Here In Finding As Per Preference

        log("User getNearByProfile :");
        log("Convert Meter to Radians Within " + userPreference.preferDistance);
        var radian = kmToRadian(userPreference.preferDistance);
        log(radian);
        this.model('UserProfileModel').find({
            age: { $gt: userPreference.preferAge, $lt: 90 },
            location: {
                $geoWithin: {
                    $centerSphere: [
                        location.coordinates,
                        radian
                    ],

                }
            }
        }, function(err, results) {
            if (err) {
                console.log("Error Occured :");
                log(err);
            }

            if (results) {
                log("=============================");
                log("Near Profile On Search Query :");
                log(results.length);
                log(results);
                log("Turf Calculated Distance in API /post/filter/gender in KM");

                respCb(results);
            } else {
                respCb([]);

            }
        });
    };

    ProfileSchema.methods.getNearByProfileTrending = function(location, userPreference, respCb) {

        // User Requirements Goes Here In Finding As Per Preference

        log("Executing getNearByProfileTrending :");
        log("Coords On Search: ");
        log(location.coordinates);
        log("User Preference :");
        log(userPreference);
        log("#######################");
        log(location.coordinates);
        this.model('UserProfileModel').find({
            age: { $gt: userPreference.preferAge, $lt: 90 },
            gender: userPreference.preferGender,
            preferGender: userPreference.gender,
            location: {
                $geoWithin: {
                    $centerSphere: [
                        location.coordinates,
                        radian
                    ],

                }
            }
        }, function(err, results) {

            log(results);
            if (err) {
                console.log("Error Occured :");
                log(err);
            }

            if (results) {
                log("=============================");
                log("Near Profile On Search Query :");
                log(results);


                respCb(results);
            } else {
                respCb([]);

            }
        });


    };



})()