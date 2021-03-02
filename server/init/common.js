(function() {


    getCountryFullFromCode = module.exports = function(country) {

        if (country == 'IN' || country == 'in')
            return 'india';

    }
    // JWT Common Function
    createJWT = module.exports = function(mobileNumber) {

        var timer = moment().add(365, 'days').unix();
        var payload = {
            sub: mobileNumber,
            iat: moment().unix(),
            exp: timer
        };
        log("JWT Token Expiry Set For :");
        log(timer);
        return jwt.encode(payload, "thisisatest");
    }

    ensureAuthenticated = module.exports = function(req, res, next) {
        if (!req.header('Authorization')) {
            return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
        }
        var token = req.header('Authorization').split(' ')[1];

        var payload = null;
        try {
            payload = jwt.decode(token, "thisisatest");
        } catch (err) {
            return res.status(401).send({ message: 'Auth has Expired.Please Login Again', status: false, isTokenValid: false });
        }

        if (payload.exp <= moment().unix()) {
            return res.status(401).send({ message: 'Auth has Expired.Please Login Again', status: false, isTokenValid: false });
        }
        req.user = payload.sub;
        next();
    }

    //  milesToRadian = module.exports = function(miles) {
    //     var earthRadiusInMiles = 3963;
    //     log("Miles to Calculate : " + miles);
    //     log("Km To Radian");
    //     log(miles / earthRadiusInMiles);
    //     return miles / earthRadiusInMiles;
    // };

    // // or custom function - convert km to radian
    // kmToRadian = module.exports = function(km) {
    //     var earthRadiusInMiles = 6378;
    //     log("KM to Calculate : " + km);
    //     log("Km To Radian");
    //     log(km / earthRadiusInMiles);
    //     return km / earthRadiusInMiles;
    // };

    milesToRadian = module.exports = function(miles) {
        var earthRadiusInMiles = 3963;
        log("Miles to Calculate : " + miles);
        log("Km To Radian");
        log(miles / earthRadiusInMiles);
        return miles / earthRadiusInMiles;
    };

    // or custom function - convert km to radian
    kmToRadian = module.exports = function(km) {
        var earthRadiusInMiles = 6378;
        log("KM to Calculate : " + km);
        log("Km To Radian");
        log(km / earthRadiusInMiles);
        return km / earthRadiusInMiles;
    };

})()