'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  
  /* MainController */
  .controller('MainController', ['$scope','$http', function($scope, $http) {

  	$scope.request = {place: 'erdberg', sport: 'squash', result:'', date:getDateAsString()};
    $http.defaults.useXDomain = true;

  	$scope.reset = function() {
      $scope.request = {place: 'erdberg', sport: 'squash', result:null, date:getDateAsString()};
    };

    $scope.send = function() {
      var mainUrl = 'http://lukaszkoweapi.herokuapp.com/nocache/?url=http://www.clubdanube.at/appdata/index.php?e=ballsport';
      var placeUrl;
      var sportUrl;
      var timeUrl = '%26ft=07%3A00%3A00%26tt=23%3A00%3A00';

      if($scope.request.place === 'erdberg'){
        placeUrl = '%26s=S220120604';
      } else if ($scope.request.place === 'ottakring'){
        placeUrl = '%26s=S420120604';
      }else{
        alert('Wrong place ! '+$scope.request.place)
      }
      
      if($scope.request.sport === 'squash'){
        sportUrl = '%26n=Squash';
      } else if ($scope.request.sport === 'badminton'){
        sportUrl = '%26n=Badminton';
      } else if ($scope.request.sport === 'tennis'){
        sportUrl = '%26n=Tennis';
      }else{
        alert('Wrong sport ! '+$scope.request.place)
      }

      $http.defaults.useXDomain = true;
      
      var requestUrl = mainUrl+placeUrl+sportUrl+'%26d='+$scope.request.date+timeUrl;
      
      $http.get(requestUrl).success(function(data, status, headers, config){
        $scope.request.result = data;
      }).error(function(data, status, headers, config){
        alert("Error - request to ClubDanube failed !");
        $scope.request.result = config;
      });
      
    };

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

  }])

  /* AboutController */
  .controller('AboutController', ['$scope', function($scope) {

  }]);
