(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Sneha";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
