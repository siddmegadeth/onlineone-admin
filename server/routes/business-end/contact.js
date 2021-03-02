(function() {

    app.post('/post/customer/contact', function(req, resp) {
        log('/post/customer/contact');
        var form = req.body.form || req.query.form;
        var profile = req.body.profile || req.query.profile;
        form = JSON.parse(form);
        log(profile);
        log(form);
        CreateBusinessModel.findOneAndUpdate({ profile: profile }, { $push: { customerContact: form } }, { upsert: true, setDefaultsOnInsert: true }, function(errFoundEntity, foundEntity) {

            if (errFoundEntity) {
                resp.send({ status: false, error: errFoundEntity, data: undefined, isCustomerAdded: false });
            }

            resp.send({ status: true, message: 'Customer Added', data: foundEntity, isCustomerAdded: true });
        });
    });


})();