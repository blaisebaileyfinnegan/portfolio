'use strict';

angular.module('portfolioApp.ButtonDirective', ['portfolioApp.HeaderController'])
  .directive('button', function() {
    return {
      require: '^links',
      restrict: 'C',
      transclude: true,
      scope: {
        select: '&',
        uiSref: '@uiSref'
      },
      controller: function($scope, $attrs, $element, $state) {
        $scope.state = $state;
      },
      template: '<li><a ng-click="select()" ng-class="{selected: state.current.name == uiSref}" ng-transclude></a></li>',
      replace: true
    };
  });