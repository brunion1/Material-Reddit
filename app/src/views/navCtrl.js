  app.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $mdMedia) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
        });
    };
  });

//test