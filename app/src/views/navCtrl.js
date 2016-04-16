(function () {
  'use strict';
  
  angular
    .module('app')
    .controller('LeftCtrl',LeftCtrl);
    
  LeftCtrl.$inject = ['$scope','$timeout', '$mdSidenav', '$mdMedia'];
  
  function LeftCtrl($scope, $timeout, $mdSidenav, $mdMedia){
    var vm = this;
    vm.close = function(){
      // What's this even do?
    }
  }
})(); 