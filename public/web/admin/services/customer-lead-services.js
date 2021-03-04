app.service('customerLead', ['$http', function($http) {
    return {

        saveCustomerLead: function(form) {
            return $http({
                method: 'POST',
                url: '/post/customer/lead',
                params: {
                    form: form
                }
            })

        },
        saveCustomerLeadEmail: function(email) {
            return $http({
                method: 'POST',
                url: '/post/customer/lead/email',
                params: {
                    email: email
                }
            })
        },
        getCustomerRegisteredOnSite: function() {
            return $http({
                method: 'GET',
                url: '/get/customer/registered/onsite',
            })
        }
    }
}]);