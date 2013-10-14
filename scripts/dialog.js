angular.module('robotStore.Directives')
    .directive('dialog', function() {
        return {
            template: '<div class="dialog" ng-show="opened"><div class="inner"><div class="content" ng-transclude></div><button class="btn btn-info" ng-click="onClose()">Close</button></div></div>',
            scope: {
                opened: '=',
                onClose: '&'
            },
            transclude: true,
            replace: false
        };
    });

