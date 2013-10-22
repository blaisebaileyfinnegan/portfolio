'use strict';

var app = angular.module('portfolioApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'portfolioApp.HeaderController',
  'portfolioApp.ButtonDirective',
  'portfolioApp.LinksDirective',
  'portfolioApp.CaptionDirective'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: 'views/projects.html'
    })
    .state('resume', {
      url: '/resume',
      templateUrl: 'views/resume.html'
    });
});

