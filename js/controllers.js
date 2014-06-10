'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope','$http', function($scope, $http) {




  	$scope.data = {place: 'erdberg', sport: 'squash', result:''};
    $http.defaults.useXDomain = true;

  	$scope.reset = function() {
      $scope.data = {place: '', sport: ''};
    };

    $scope.send = function() {
      var mainUrl = 'http://lukaszkoweapi.herokuapp.com/nocache/?url=http://www.clubdanube.at/appdata/index.php?e=ballsport';
      var placeUrl;
      if($scope.data.place == 'erdberg'){
        placeUrl = 'S220120604';
      } else if ($scope.data.place == 'ottakring'){
        placeUrl = 'S42012060';
      }else{
        alert($scope.data.place)
      }

      var sportUrl;
      if($scope.data.sport == 'squash'){
        sportUrl = 'Squash';
      } else if ($scope.data.sport == 'badminton'){
        sportUrl = 'Badminton';
      } else if ($scope.data.sport == 'tennis'){
        sportUrl = 'Tennis';
      }else{
        alert($scope.data.place)
      }
      $http.defaults.useXDomain = true;
      $http.get(mainUrl+'%26s='+placeUrl+'%26n='+sportUrl+'%26d=2014-06-11%26ft=19%3A00%3A00%26tt=21%3A00%3A00').success(function(data, status, headers, config){
        // With the data succesfully returned, call our callback
        $scope.data.result = data;
      }).error(function(data, status, headers, config){
        alert("error");
        $scope.data.result = config;
      });
      
    };

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
