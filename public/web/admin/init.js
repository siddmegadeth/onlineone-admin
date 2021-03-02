"use strict";
var DI = [

];
var win = new winDevice("myApp", DI); //Bootstrap Cordova Or Browser Based App .no ng-app Required
var app = win.device(); // init App
win.enable(true);
win.info();
var deviceType = win.deviceType();
warn('Detected Platform Type :');
log(deviceType);
var osType = win.getOS();
warn('Detected OS Type :');
log(osType);


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


app.config([function() {

}]);


app.controller('globalCtrl', ['$scope', 'customerLead', '$timeout', function($scope, customerLead, $timeout) {
    console.log('globalCtrl :');
    $timeout(function() {
        $scope.totalCustomerRegistered = [];
        $scope.getCustomerInit();
    });

    $scope.performAction = function(action){
        log(action);
    };

    $scope.orderByType = function(value){
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