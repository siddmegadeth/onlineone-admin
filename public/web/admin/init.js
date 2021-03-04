"use strict";
var DI = [
    'ui.bootstrap',
    'ngRoute',
    'ui-notification'
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





app.config(['$routeProvider', 'NotificationProvider', function($routeProvider, NotificationProvider) {

    NotificationProvider.setOptions({
        delay: 5000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'top'
    });
    $routeProvider.when("/", {
        controller: 'landingCtrl',
        templateUrl: 'components/landing/landing.html'
    }).otherwise({ redirectTo: '/' });

}]);