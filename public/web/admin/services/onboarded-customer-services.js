app.service('onBoardedCustomer', ['$http', function($http) {
    return {

        getCustomerRegistered: function() {
            return $http({
                method: 'GET',
                url: '/get/customer/onboarded',
            })
        }
    }
}]);