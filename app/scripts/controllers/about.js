'use strict';

/**
 * @ngdoc function
 * @name yeomanTodeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanTodeApp
 */
angular.module('yeomanTodeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
