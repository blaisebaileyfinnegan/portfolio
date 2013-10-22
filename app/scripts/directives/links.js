'use strict';

angular.module('portfolioApp.LinksDirective', ['portfolioApp.HeaderController'])
  .directive('links', function() {
    return {
      restrict: 'E',
      transclude: true,
      controller: function($scope, $element, $state) {
      },
      template: '<ul ng-transclude></ul>',
      replace: true
    };
  });