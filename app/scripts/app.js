'use strict';

/**
 * @ngdoc overview
 * @name yeomanTodeApp
 * @description
 * # yeomanTodeApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanTodeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'leaflet-directive',
    'ngImgCrop'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/map',{
        templateUrl : 'views/map.html',
        controller : 'MapCtrl'
      })
      .when('/ad',{
        templateUrl : 'views/ad.html',
        controller : 'AdCtrl'
      })      
      .when('/com.module.dashboard', {
        templateUrl: 'views/com.module.dashboard.html',
        controller: 'ComModuleDashboardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
