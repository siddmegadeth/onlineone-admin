(function() {

    app.post('/post/customer/lead', function(req, resp) {
        log('/post/customer/lead');
        var form = req.body.form || req.query.form;
        form = JSON.parse(form);
        log(form);
        var customer = new CustomerLeadModel({
            fullname: form.fullname,
            email: form.email,
            message: form.message,
            subject: form.subject,
        });
        log(customer);
        customer.save(function(errFoundSave, savedEntity) {
            if (errFoundSave) {
                resp.send({ status: false, error: errFoundSave, isCustomerAdded: false });
            }
            if (savedEntity) {
                log(' Save Entity');
                resp.send({ status: true, message: 'Customer Successfully Added', isCustomerAdded: true });
            } else {
                log('Unable to Save');
                resp.send({ status: true, message: 'Unable To Add Customer', isCustomerAdded: false });
            }
        });
    });

    app.post('/post/customer/lead/email', function(req, resp) {
        log('/post/customer/lead/email');
        var email = req.body.email || req.query.email;
        var lead = CustomerLeadModel({ email: email });
        lead.save(function(errFoundSave, savedEntity) {

            if (errFoundSave) {
                resp.send({ status: false, error: errFoundSave, isCustomerAdded: false });
            }

            resp.send({ status: true, message: 'Customer Successfully Added', isCustomerAdded: true });
        });
    });

    app.get('/get/customer/registered/onsite', function(req, resp) {
        log('/get/customer/registered/onsite');
        CustomerLeadModel.find({}, function(errFound, foundEntity) {

            if (errFound) {
                resp.send({ status: false, error: errFound, isCustomerFound: false });
            }
            if (foundEntity) {
                log('Found');
                resp.send({ status: true, message: 'Customer Record Found', data: foundEntity, isCustomerFound: true });
            } else {
                log('Not Found');

                resp.send({ status: true, message: 'Customer Record Not Found', isCustomerFound: false });
            }

        });
    });



})();