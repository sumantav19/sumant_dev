'use strict';

/**
 * @ngdoc function
 * @name yeomanTodeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTodeApp
 */
angular.module('yeomanTodeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos=['Item1','Item2','Item3'];
    $scope.addTodo = function () {
  		$scope.todos.push($scope.todo);
  		$scope.todo = '';
	};
	$scope.removeTodo = function (index) {
	  $scope.todos.splice(index, 1);
	};
  });
