(function () {
    'use strict';

    angular.module('App')
        .factory('Data',['$http',function DataFactory($http) {
            return  {
                get:function () {
                    return  $http({
                        method: 'GET',
                        url: 'https://candidate-test.herokuapp.com/contacts'
                    });
                }
                
            }
        }]);
})();