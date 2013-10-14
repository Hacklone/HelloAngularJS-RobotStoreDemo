angular.module('robotStore.Directives', [])
    .directive('robot', function() {
       return {
           templateUrl: '/templates/robot.html',
           scope: {
               robot: '='
           },
           replace: true
       };
    });
