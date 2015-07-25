/**
 * Main AngularJS Web Application
 */
var app = angular.module('redMat', ['ngMaterial']);

app.controller('mainCtrl', function($scope, $http){
    $scope.stories = [];
    loadStories();
    
    function loadStories(){
      $http.get('http://www.reddit.com/r/funny/new.json?sort=new')
      .success(function(response){
        angular.forEach(response.data.children, function(child){
          $scope.stories.push(child.data);
        });
      })
    }
});