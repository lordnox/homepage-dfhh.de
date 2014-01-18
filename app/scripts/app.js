
var module = angular.module('application', [
    'ngAnimate',
    'ui.router',
    'configuration',
    'pascalprecht.translate',
    'app',
  ])

  .config(function($locationProvider, $urlRouterProvider, configProvider) {
    var config = configProvider.config;

    // Default route:
    $urlRouterProvider.otherwise(config.routing.default);

    if(config.routing.html5Mode) {
      $locationProvider.html5Mode(true);
    }
    else {
      var routingPrefix = config.routing.prefix;
      if(routingPrefix && routingPrefix.length > 0) {
        $locationProvider.hashPrefix(routingPrefix);
      }
    }
  })

  .run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  })

  .controller('applicationController', function($scope) {})

;

//window.App = module;