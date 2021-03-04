app.controller('globalCtrl', ['$scope', 'customerLead', '$timeout', function($scope, customerLead, $timeout) {
    console.log('globalCtrl :');
    $timeout(function() {
        $scope.totalCustomerRegistered = [];
        $scope.getCustomerInit();
    });

    $scope.performAction = function(action) {
        log(action);
    };

    $scope.orderByType = function(value) {
        $scope.orderByValue = value;
    };
    $scope.getCustomerInit = function() {
        console.log('Get Customers :');
        customerLead.getCustomerRegisteredOnSite().then(function(resp) {
            console.log(resp);
            if (resp.data && resp.data.isCustomerFound) {
                $scope.totalCustomerRegistered = resp.data.data;
            }
        });
    }

}]);