'use strict';

angular.module('portfolioApp.CaptionDirective', ['portfolioApp.HeaderController'])
  .directive('brandcaption', function() {
    return {
      restrict: 'E',
      scope: {
        state: '@state'
      },
      transclude: true,
      controller: function($scope, $attrs, $element, $state) {
        $scope.currentState = $state;
      },
      template: '<div ng-show="currentState.current.name == state" class="brand-caption" ng-transclude></div>',
      replace: true
    };
  });