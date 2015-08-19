app = angular.module('app', [ 'ngRoute', 'ui.bootstrap', 'ngAnimate', 'LocalStorageModule']);

app.constant('HOST', 'http://localhost:6789');

app.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

/*
 ------------------------ROUTES------------------------
*/

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/menus', {
    templateUrl: 'views/menus.html',
  })
  .when('/cart', {
    templateUrl: 'views/cart.html',
  })
  .when('/admin', {
    templateUrl: 'views/admin.html',
  })
  .otherwise({
    redirectTo: '/menus'
  });
}]);