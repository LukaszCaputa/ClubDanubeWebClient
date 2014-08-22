'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  
  /* MainController */
  .controller('MainController', ['$scope','$http', function($scope, $http) {

    function getDateAsString (){
      var dateObject = new Date();
      var currentYear = dateObject.getFullYear();
      var currentMonth = dateObject.getMonth() + 1;
      var currentDay = dateObject.getDate();

      if(currentMonth<10){currentMonth = '0'+currentMonth}
      if(currentDay<10){currentDay = '0'+currentDay}

      var currentDate = currentYear +'-'+ currentMonth + '-' + currentDay
      return currentDate;
    }

  	$scope.request = {place: 'erdberg', sport: 'squash', result:'', date:getDateAsString()};
    
	  $scope.dupa = "asdf";
    $http.defaults.useXDomain = true;

  	$scope.reset = function() {
      $scope.request = {place: 'erdberg', sport: 'squash', result:'', date:da};
    };

    $scope.send = function() {
      var mainUrl = 'http://lukaszkoweapi.herokuapp.com/nocache/?url=http://www.clubdanube.at/appdata/index.php?e=ballsport';
      var placeUrl;
      if($scope.request.place == 'erdberg'){
        placeUrl = 'S220120604';
      } else if ($scope.request.place == 'ottakring'){
        placeUrl = 'S42012060';
      }else{
        alert($scope.request.place)
      }

      var sportUrl;
      if($scope.request.sport == 'squash'){
        sportUrl = 'Squash';
      } else if ($scope.request.sport == 'badminton'){
        sportUrl = 'Badminton';
      } else if ($scope.request.sport == 'tennis'){
        sportUrl = 'Tennis';
      }else{
        alert($scope.request.place)
      }
      $http.defaults.useXDomain = true;
      $http.get(mainUrl+'%26s='+placeUrl+'%26n='+sportUrl+'%26d='+$scope.request.date+'%26ft=08%3A00%3A00%26tt=23%3A00%3A00').success(function(data, status, headers, config){
        // With the data succesfully returned, call our callback
        $scope.request.result = data;
      }).error(function(data, status, headers, config){
        alert("error");
        $scope.request.result = config;
      });
      
    };

  }])

  /* AboutController */
  .controller('AboutController', ['$scope', function($scope) {

  }]);
