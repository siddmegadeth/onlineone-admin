app.controller('landingCtrl', ['$scope', 'customerLead', 'onBoardedCustomer', '$timeout', 'Notification', function($scope, customerLead, onBoardedCustomer, $timeout, Notification) {
    console.log('landingCtrl :');
    $timeout(function() {
        $scope.totalCustomerRegistered = [];
        $scope.getCustomerInit();
        $scope.getOnboardedInit();
    });

    $scope.performAction = function(action) {
        log(action);
    };

    $scope.orderByType = function(value) {
        $scope.orderByValue = value;
    };

    $scope.getOnboardedInit = function() {
        console.log('Get Onboarded Customers :');
        onBoardedCustomer.getCustomerRegistered().then(function(resp) {
            console.log(resp);
            if (resp.data && resp.data.isCustomerFound) {
                Notification.success('New Data Set Loaded For New Onboarded Customers');
                $scope.totalOnboardedCustomers = resp.data.data;
            } else {
                Notification.warning('Unable to Load New Data Set');

            }
        });
    }


    $scope.getCustomerInit = function() {
        console.log('Get Customers :');
        customerLead.getCustomerRegisteredOnSite().then(function(resp) {
            console.log(resp);
            if (resp.data && resp.data.isCustomerFound) {
                Notification.success('New Data Set Loaded');
                $scope.totalCustomerRegistered = resp.data.data;
            } else {
                Notification.warning('Unable to Load New Data Set');

            }
        });
    }

}]);