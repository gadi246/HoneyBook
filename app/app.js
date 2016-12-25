(function () {
    'use strict';

    angular.module('App', [])
        .controller('MainCtrl', ['$scope','Data', function ($scope, Data) {
            $scope.showSpinner = true;
          Data.get().then(function successCallback(response) {
              $scope.contacts = response.data;
              $scope.showSpinner = false;
              console.log($scope.contacts);
          }, function errorCallback(response) {
              console.log('Error:',response);
          });
           
        }]);
})();