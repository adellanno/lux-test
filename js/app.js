var workHereApp = angular.module('WorkHereApp', ['ui.router']);

workHereApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/description");
  
  $stateProvider
    .state('description', {
      url: "/description",
      templateUrl: "templates/description.html"
    })

    .state('expectations', {
      url: "/expectations",
      templateUrl: "templates/expectations.html"
    })

    .state('why', {
      url: "/why",
      templateUrl: "templates/why.html"
    })

    .state('counter', {
      url: "/total-visitors",
      templateUrl: "templates/total-visitors.html",
      controller: 'CounterCtrl'
    })

});
