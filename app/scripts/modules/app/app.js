var app = angular.module('app', [
  'ngAnimate',
  'ui.router',
  'configuration'
])

  .config(function ($stateProvider, configProvider, $locationProvider) {

    var template  = configProvider.template('app')
      , root      = {
          abstract: true,
          views: {
            '@': {
              template: template.abstract,
            },
            navigation: {
              controller: 'navigationController',
              templateUrl: template('layout-navigation')
            },
            footer: {
              templateUrl: template('layout-footer')
            }
          }
        }
      , index     = {
          url: '/index.html',
          templateUrl: template('page-news'),
          data: {
            pics: ["pics/header_news1.jpg", "pics/header_news2.jpg", "pics/header_news3.jpg"]
          }
        }
      , news      = angular.copy(index)
    ;
    news.url = '/news.html';

    // if this is a non-root url...
    if(window.location.pathname !== "/" && configProvider.config.routing.html5Mode) {
      // add the path to the current directory as a base for the abstract state
      root.url = window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/"));
    }

    $stateProvider
      .state('app', root)
      .state('app.index', index)
      .state('app.news', news)
      .state('app.discofox', {
        url: '/discofox.html',
        templateUrl: template('page-discofox')
      })
      .state('app.westcoastswing', {
        url: '/westcoastswing.html',
        templateUrl: template('page-westcoastswing')
      })
      .state('app.styling', {
        url: '/styling.html',
        templateUrl: template('page-styling')
      })
      .state('app.workshops', {
        url: '/workshops.html',
        templateUrl: template('page-workshops')
      })
      .state('app.veranstaltungen', {
        url: '/veranstaltungen.html',
        templateUrl: template('page-veranstaltungen')
      })
      .state('app.trainerin', {
        url: '/trainerin.html',
        templateUrl: template('page-trainerin')
      })
      .state('app.anmeldungen', {
        url: '/anmeldungen.html',
        templateUrl: template('page-anmeldungen')
      })
      .state('app.impressum', {
        url: '/impressum.html',
        templateUrl: template('page-impressum')
      })
    ;
  })
  .controller('navigationController', function($scope, $state) {
    $scope.menu = [
      'app.news'
    , 'app.discofox'
    , 'app.westcoastswing'
    , 'app.styling'
    , 'app.workshops'
    , 'app.veranstaltungen'
    , 'app.trainerin'
    , 'app.anmeldungen'
    ].map($state.get);
  });
;


