'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope','$http', function($scope, $http) {
  	$scope.data = {place: 'erdberg', sport: 'squash', result:'a'};
    $http.defaults.useXDomain = true;

  	$scope.reset = function() {
      $scope.data = {place: '', sport: ''};
    };

    $scope.send = function() {
 /*   	var url = 'http://www.clubdanube.at/appdata/index.php?e=ballsport&s=S220120604&n=Squash&d=2014-06-08&ft=19%3A00%3A00&tt=21%3A00%3A00';
    	var method = 'GET';
    	var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
    
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
    alert('CORS not supported');
    
  }

  xhr.onload = function() {
    var text = xhr.responseText;
    alert('Response from CORS request to ' + url + ': ' + text);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();*/

  //delete $http.defaults.headers.common['X-Requested-With'];
  //delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $http.defaults.useXDomain = true;
//$http.get('http://www.corsproxy.com/www.clubdanube.at/appdata/index.php?e=ballsport&s=S220120604&n=Squash&d=2014-06-10&ft=19%3A00%3A00&tt=21%3A00%3A00').success(function(data, status, headers, config){
$http.get('http://www.clubdanube.at/appdata/index.php?e=ballsport&s=S220120604&n=Squash&d=2014-06-10&ft=19%3A00%3A00&tt=21%3A00%3A00').success(function(data, status, headers, config){
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
