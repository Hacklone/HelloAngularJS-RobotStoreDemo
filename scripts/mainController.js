angular.module('robotStore.Controllers', [])
    .controller('mainController', function($scope, robotService) {
        angular.extend($scope, {
            robots: robotService.robots,

            detailRobot: detailRobot,
            currentlyDetailedRobot: null,
            addRobot: robotService.addRobot
        });

        init();

        function init() {
            robotService.getRobots();
        }

        function detailRobot(robot) {
            $scope.currentlyDetailedRobot = robot;
        }
    });
