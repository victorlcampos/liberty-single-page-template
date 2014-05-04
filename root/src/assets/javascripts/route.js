{%= name %}Routes.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider.when('/', {
    templateUrl: window.viewsPath.concat('home/index.html'),
    controller: 'HomeCtrl',
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  });
}]);