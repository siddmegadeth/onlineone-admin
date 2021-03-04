(function() {



    app.get('/get/customer/onboarded', function(req, resp) {
        log('/get/customer/onboarded');
        ProfileModel.find({}, function(errFound, foundEntity) {

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