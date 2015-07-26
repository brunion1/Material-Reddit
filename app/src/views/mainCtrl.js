app.controller('mainCtrl', function($scope, $http, $mdSidenav, $mdUtil, $mdMedia){
    $scope.toggleLeft = buildToggler('left');

    $scope.stories = [];
    loadStories();
    $scope.listMode = true;
    

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
