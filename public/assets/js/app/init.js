'use strict';

angular.module('Application', [
  'ngMaterial',
  'ngMessages',
  'ngRoute',
  'Application.Controllers'
]).
config(['$locationProvider', '$interpolateProvider', '$routeProvider', function($locationProvider, $interpolateProvider, $routeProvider) {

    // URL prefix
    $locationProvider.hashPrefix('!');

    // Application routing
    $routeProvider
      .when("/", {
          templateUrl : "/views/pages/dashboard.html"
      })
      .when("/stats/dashboard", {
          templateUrl : "/views/pages/dashboard.html"
      })
      .when("/stats/connect", {
          templateUrl : "/views/pages/connect.html"
      })
      .when("/stats/campaigns", {
          templateUrl : "/views/pages/campaigns.html"
      })
      .when("/stats/deeplinks", {
          templateUrl : "/views/pages/deeplinks.html"
      })
      .when("/stats/impressions", {
          templateUrl : "/views/pages/impressions.html"
      })
      .when("/stats/installs", {
          templateUrl : "/views/pages/installs.html"
      })
      .when("/stats/purchases", {
          templateUrl : "/views/pages/purchases.html"
      })
}]);
