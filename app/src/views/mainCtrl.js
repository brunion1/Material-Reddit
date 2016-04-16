(function(){
  'use strict';
  
  angular
    .module('app')
    .controller('mainCtrl', mainCtrl);
    
  mainCtrl.$inject = ['$scope', '$http', '$mdSidenav', '$mdUtil', '$mdMedia'];
  
  function mainCtrl($scope, $http, $mdSidenav, $mdUtil, $mdMedia){
    var vm = this;
    
    vm.openLink = openLink;
    vm.toggleLeft = buildToggler('left');
    
    vm.stories = [];
    loadStories();
    vm.listMode = true;
    
    function openLink(url){
      window.open(url, '_blank');
    }
    
    
  }
  
})();


app.controller('mainCtrl', function($scope, $http, $mdSidenav, $mdUtil, $mdMedia){
    $scope.toggleLeft = buildToggler('left');

    $scope.stories = [];
    loadStories();
    $scope.listMode = true;
    
    $scope.openLink = function(url){
      window.open(url, '_blank');
    };
    
    $scope.$watch('listMode', function(){
        console.log("Value is now: " + $scope.listMode);
        if($scope.listMode){
            $scope.mode = "List";
        }else{
            $scope.mode = "Card";
        }
    }, true);
    
    function loadStories(){
      $http.get('http://www.reddit.com/r/funny/new.json?sort=new')
      .success(function(response){
        angular.forEach(response.data.children, function(child){
          $scope.stories.push(child.data);
        });
      console.log($scope.stories);
      })
    }
    
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
              });
          },300);
      return debounceFn;
    }
});
