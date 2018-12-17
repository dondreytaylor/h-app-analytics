'use strict';

angular.module('Application.Controllers', [])

.controller("AppCtrl", ["$scope", "$compile", "$timeout", function($scope, $compile, $timeout) {
}])

.controller("DashboardCtrl", ["$scope", "$compile", "$timeout", function($scope, $compile, $timeout) {
    LI.show();
    LI.hide();
}])

.controller("ConnectCtrl", ["$scope", "$compile", "$timeout", function($scope, $compile, $timeout) {
    LI.show();
    LI.hide();
    $scope.connectDisconnect = function(service) {
        NF.show("No endpoint specified.");
    };
}])

.controller("CampaignsCtrl", ["$scope", "$compile", "$timeout", function($scope, $compile, $timeout) {
    LI.show();
    LI.hide();
}])

.controller("DeeplinksCtrl", ["$scope", "$compile", "$timeout", function($scope, $compile, $timeout) {
  LI.show();
  LI.hide();
}])

.controller("ImpressionsCtrl", ["$scope", "$compile", "$timeout", function($scope, $compile, $timeout) {
    LI.show();
    LI.hide();
}])

.controller("InstallsCtrl", ["$scope", "$compile", "$timeout", function($scope, $compile, $timeout) {
    LI.show();
    LI.hide();
}])

.controller("PurchasesCtrl", ["$scope", "$compile", "$timeout", function($scope, $compile, $timeout) {
    LI.show();
    LI.hide();
}])
