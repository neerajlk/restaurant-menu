app.controller('menuLisitingController', function ($scope, $routeParams, Restaurant, $window, $location) {

    $scope.Restaurant = new Restaurant()
    var RestaurantId = $routeParams.restaurantId;

    //get restaurant menu by  restaurant Id
    getMenuList = function () {
        $scope.Restaurant.getMenuById(RestaurantId, function (error, result) {
            if (error) {
                alert(error)
            }
            else {
                $scope.MenuList = result
                $scope.restaurantName = result.name

                if (!Array.isArray($scope.MenuList.menu.items)) {
                    obj = angular.copy($scope.MenuList.menu.items)
                    $scope.MenuList.menu.items = []
                    $scope.MenuList.menu.items.push(obj)
                    delete obj
                }

            }
        })
    }
    getMenuList()
});