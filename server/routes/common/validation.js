(function() {
    // validate access_token before continue
    app.post("/post/validate/token", ensureAuthenticated, function(req, resp) {
        resp.send({ message: 'Token Are Valid', status: true, isTokenValid: true });
    });


    app.get("/policies/privacy", function(req, resp) {
        var terms = require("./../../terms/terms");
        resp.send(terms.terms);
    });

    app.get("/get/awake", function(req, resp) {
        log("/get/awake");
        log(new Date());
        resp.send({ message: 'Self Awake Init' + new Date(), status: true });
    });


})()