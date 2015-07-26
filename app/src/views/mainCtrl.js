app.controller('mainCtrl', function($scope, $http, $mdSidenav, $mdUtil, $mdMedia){
    $scope.toggleLeft = buildToggler('left');

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
