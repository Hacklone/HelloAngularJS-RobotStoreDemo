angular.module('robotStore', [ 'robotStore.Constants', 'robotStore.Controllers', 'robotStore.Services', 'robotStore.Directives', 'ngMockE2E'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/hello', {
                templateUrl: '/templates/index.html'
            })
            .when('/store', {
                templateUrl: '/templates/store.html',
                controller: 'mainController'
            })
            .otherwise({
                redirectTo: '/hello'
            });
    })
    .run(function ($httpBackend, names) {
        var robots = [];

        for (var i = 0; i < 8; i++) {
            robots.push(getRandomRobot());
        }

        $httpBackend.whenGET(/^\/templates\//).passThrough();
        $httpBackend.whenGET('/robots').respond(robots);
        $httpBackend.whenGET('/addRobot').respond(function() {
            robots.push(getRandomRobot());

            return [200, robots];
        });

        function getRandomRobot() {
            var name = names[Math.round(Math.random() * (names.length - 1))];

            return {
                name: name,
                image: 'http://robohash.org/' + name + '?size=100x100'
            };
        }
    });
