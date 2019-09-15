var app = angular.module("myapp", ['ngRoute', 'angularUtils.directives.dirPagination'])

app.config(function ($routeProvider, $httpProvider) {
    // ===================================== ROUTING =====================================
    $routeProvider
        .when('/restaurant', {
            templateUrl: 'views/restaurant/restaurantListing.html',
            controller: 'restaurantListingController'
        })

        .when('/restaurant/:restaurantId', {
            templateUrl: 'views/restaurant/restaurantMenuListing.html',
            controller: 'menuLisitingController'
        })
        .otherwise({
            redirectTo: '/restaurant'
        });

});

