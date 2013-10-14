angular.module('robotStore.Services', [])
    .service('robotService', function($http, $q) {
        var self = {
            robots: [],

            getRobots: getRobots,
            addRobot: addRobot
        };

        function getRobots() {
            var deferred = $q.defer();

            $http.get('/robots')
                .success(function(robotsFromServer) {
                    Array.prototype.push.apply(self.robots, robotsFromServer);

                    deferred.resolve();
                })
                .error(function() {
                    deferred.reject();
                });

            return deferred.promise;
        }

        function addRobot() {
            var deferred = $q.defer();

            $http.get('/addRobot')
                .success(function(robotsFromServer) {
                    self.robots.length = 0;
                    Array.prototype.push.apply(self.robots, robotsFromServer);

                    deferred.resolve();
                })
                .error(function() {
                    deferred.reject();
                });

            return deferred.promise;
        }

        return self;
    });
