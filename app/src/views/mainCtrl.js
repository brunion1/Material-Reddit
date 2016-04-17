(function () {
  'use strict';

  angular
    .module('app')
    .controller('mainCtrl', mainCtrl);

  mainCtrl.$inject = ['$scope', '$http', '$mdSidenav', '$mdUtil', '$mdMedia'];

  function mainCtrl($scope, $http, $mdSidenav, $mdUtil, $mdMedia) {
    var vm = this;

    vm.openLink = openLink;
    vm.toggleLeft = buildToggler('left');

    vm.stories = [];
    loadStories();
    vm.listMode = true;

    function openLink(url) {
      window.open(url, '_blank');
    }

    function loadStories() {
      $http.get('http://www.reddit.com/r/funny/new.json?sort=new')
        .success(function (response) {
          angular.forEach(response.data.children, function (child) {
            vm.stories.push(child.data);
          });
          console.log(vm.stories);
        });
    }

    function buildToggler() {
      var debounceFn = $mdUtil.debounce(function () {
        // I'm not real sure what's happening here
        $mdSidenav(navID)
          .toggle()
          .then(function () {
          });
      }, 300);
      return debounceFn;
    }

    // Who watches the watchmen?
    vm.$watch('listMode', function () {
      console.log("Value is now: " + $scope.listMode); //This propbably needs to be vm.something, but i don't know where it comes from yet
      if ($scope.listMode) {
        vm.mode = "List";
      } else {
        vm.mode = "Card";
      }
    }, true);
    
    $scope.$apply();
    $scope.$apply();
}

})();
